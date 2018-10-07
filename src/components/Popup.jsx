import React from 'react';
import axios from 'axios';
import '../scss/styles.scss';

export default class Popup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentWillMount() {
        const lastCacheDate = localStorage.getItem('lastCacheDate');
        if (lastCacheDate != null) {
            const dateDiff = Math.round(Math.abs((new Date(lastCacheDate).getTime() - new Date().getTime()) / (24 * 3600 * 1000)));
            if (dateDiff >= 1)
                localStorage.clear();
        }

        var data = JSON.parse(localStorage.getItem('cacheData'));
        if (data == null) {
            axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40bozd4g')
                .then(res => {
                    if (res.data.items == null) {
                        alert("Posts is not found!");
                        return;
                    }

                    localStorage.setItem('lastCacheDate', new Date());
                    localStorage.setItem('cacheData', JSON.stringify(res.data));
                    this.bindLastPosts(res.data.items.filter(function (e) {
                        return e.categories.length > 0
                    }));
                })
        }
        else {
            console.log("The data is coming from cache.")
            this.bindLastPosts(data.items.filter(function (e) {
                return e.categories.length > 0
            }));
        }
    }

    bindLastPosts(d) {
        var rows = [];
        for (var i = 0; i < d.length; i++) {
            rows.push(
                <div key={i} className='post'>
                    <a href={d[i].guid}><h2>{this.replaceAll(d[i].title, '&amp', '&')}</h2></a>
                    <p>{this.replaceAll(d[i].description.substring(0, 275), /<[^>]*>/, '')}..<a href={d[i].link}>read more</a></p>
                </div>
            );

            if(rows.length >= 10)
                break;
        }

        this.setState({
            posts: rows
        });
    }

    replaceAll(s, replaceWhat, replaceTo) {
        var re = new RegExp(replaceWhat, 'g');
        return s.replace(re, replaceTo);
    }

    render() {
        var popupStyle = {
            opacity: this.props.popupDisplay,
            visibility: this.props.popupDisplay === 0 ? 'hidden' : 'visible'
        };
        return (
            <div className='popup' style={popupStyle}>
                <div className='posts'>
                    {this.state.posts}
                </div>
            </div>
        );
    }
}