<template>
    <div class="container">
        <div class="header">
            <div class="header-search" @click="tosearch">
                <div class="search-logo">
                    <i></i>
                </div>
                <input type="text" class="search-input" placeholder="葡萄酒" />
            </div>
            <div class="shortcut">
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
        <div class="content">
            <!-- 左侧列表 -->
            <div class="content-left">
                <ul class="content-left-list">
                    <li class="content-left-item" v-for="(item, index) in leftlist" :key="item.id" @click="tab(index)">
                        <span :class="{ active: numindex == index }">{{ item.txt }}</span>
                    </li>
                </ul>
            </div>
            <!-- 右侧详情 -->
            <div class="content-right">
                <ul class="content-right-list">
                    <li class="content-right-item" v-for="(item, index) in rightlist" :key="item.id" v-show="index == numindex">
                        <header v-if="item.headimg1" class="headimg1">
                            <img :src="item.headimg1" alt="" />
                        </header>
                        <header v-if="item.headimg2" class="headimg2">
                            <img :src="item.headimg2" alt="" />
                        </header>
                        <div class="emptydiv"></div>
                        <div class="category-list">
                            <div class="title">
                                <h3>
                                    <span>{{ item.title }}</span>
                                </h3>
                            </div>
                            <ul class="goods-list">
                                <li v-for="items in item.contentlist" :key="items.id">
                                    <div class="pro-panels">
                                        <div class="p-img" :style="'background-image:url(' + items.img + ')'"></div>
                                        <div class="p-name">
                                            <span>{{ items.name }}</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                         <div class="category-list" v-if="item.contentlist2">
                            <div class="title">
                                <h3>
                                    <span>{{ item.title2 }}</span>
                                </h3>
                            </div>
                            <ul class="goods-list">
                                <li v-for="items in item.contentlist2" :key="items.id">
                                    <div class="pro-panels">
                                        <div class="p-img" :style="'background-image:url(' + items.img + ')'"></div>
                                        <div class="p-name">
                                            <span>{{ items.name }}</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                         <div class="category-list" v-if="item.contentlist3">
                            <div class="title">
                                <h3>
                                    <span>{{ item.title3 }}</span>
                                </h3>
                            </div>
                            <ul class="goods-list">
                                <li v-for="items in item.contentlist3" :key="items.id">
                                    <div class="pro-panels">
                                        <div class="p-img" :style="'background-image:url(' + items.img + ')'"></div>
                                        <div class="p-name">
                                            <span>{{ items.name }}</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                         <div class="category-list" v-if="item.contentlist4">
                            <div class="title">
                                <h3>
                                    <span>{{ item.title4 }}</span>
                                </h3>
                            </div>
                            <ul class="goods-list">
                                <li v-for="items in item.contentlist4" :key="items.id">
                                    <div class="pro-panels">
                                        <div class="p-img" :style="'background-image:url(' + items.img + ')'"></div>
                                        <div class="p-name">
                                            <span>{{ items.name }}</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                         <div class="category-list" v-if="item.contentlist5">
                            <div class="title">
                                <h3>
                                    <span>{{ item.title5 }}</span>
                                </h3>
                            </div>
                            <ul class="goods-list">
                                <li v-for="items in item.contentlist5" :key="items.id">
                                    <div class="pro-panels">
                                        <div class="p-img" :style="'background-image:url(' + items.img + ')'"></div>
                                        <div class="p-name">
                                            <span>{{ items.name }}</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            // 点击切换的索引
            numindex: 0,
            // 左侧列表
            leftlist: [],
            // 右侧详情
            rightlist: [],
        };
    },
    computed: {},
    methods: {
        // 切换
        tab(index) {
            this.numindex = index;
        },
        // 获取数据
        getData() {
            let that = this;
            let url = 'http://localhost:8080/data/sortlist.json';
            axios
                .get(url)
                .then(function(response) {
                    // console.log(response);
                    that.leftlist = response.data.leftlist;
                    that.rightlist = response.data.rightlist;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        tosearch() {
            this.$router.push({
                path: '/search',
            });
        },
    },
    created() {
        this.getData();
    },
};
</script>

<style scoped>
.container {
    flex-grow: 1;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: hidden;
    background-color: #ffffff;
}
.header {
    width: 100%;
    max-width: 720px;
    min-height: 2rem;
    margin: 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.header-search {
    -webkit-box-flex: 1;
    flex: 1;
    position: relative;
    width: 100%;
    height: 1.6rem;
    background-color: rgba(155, 155, 155, 0.1);
    border-radius: 0.8rem;
    -webkit-border-radius: 0.8rem;
    margin-left: 0.8rem;
    overflow: hidden;
    display: flex;
    align-items: center;
}
.search-logo {
    height: 100%;
}
.search-logo > i {
    margin-left: 0.4rem;
    margin-top: 0.4rem;
    display: block;
    height: 0.7rem;
    width: 0.7rem;
    padding: 0;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAz1BMVEUAAAD///+/v7+2trbMzMy5ubm8vLy/v7+2tra8vLy4uLi7u7u5ubm4uLizs7Ozs7O4uLizs7O1tbW3t7e1tbW2tra2tra1tbW0tLS1tbW0tLS1tbW2tra0tLSzs7O0tLS0tLS0tLS0tLSzs7O0tLSzs7Ozs7O0tLS1tbWzs7O0tLS0tLSzs7O0tLS0tLS0tLSzs7Ozs7O0tLS0tLSzs7O0tLS0tLSzs7O0tLSzs7O0tLS0tLS0tLSzs7Ozs7O0tLS0tLSzs7Ozs7O0tLSzs7Nm8QZvAAAARHRSTlMAAQQHCgsTFBUXGR4hJCUvMjY3OT4/QkxOT1JWV212d3uEhZGSl5ufoaKxvsDFyMnKzc/Q0dLV4uPl5ufq8vn6+/z9/p9kkSwAAAEESURBVHhevY9de8FAFIRFQpAWBYAQ0JQgNJUPkDD//zfBo33O7mr1yty9O7PnnIk9V1K2XCukf7WzwwAXLfTEPVvuh4BnjedbYN0U/dQU0Sh3TVZnQE/4P4Wb/6F2iA4X6MPNEGwcDyX2vjDKMw8GbInyECN2ouKjQvsHON/HjRjQDfD4q4tYEirDEmpjQ6iGsdAbO0IFzPmABp9QGluZC9TZrQtUucAHuhR1zFj/dR+9UE6s0aYcn8Bkf7QQNoj/jiDJ7ezhaCjf8yfASuV7dQ7wjWJK1urmHsEKjpAo2bgpMpOqcychVQafm51vdS/3q19sQpTq/CehPEq8xf6UcvafohM59CQK7MaSeAAAAABJRU5ErkJggg==) no-repeat 50%;
    background-size: 0.7rem 0.7rem;
}
.search-input {
    border: none;
    flex: 1;
    font-size: 0.65rem;
    color: #b3b3b3;
    height: 1.6rem;
    line-height: 2.6;
    padding-right: 0.4rem;
    text-align: left;
    background-color: transparent;
}
.shortcut {
    padding: 0 0.4rem;
}
.shortcut > ul {
    display: flex;
    justify-content: center;
    align-items: center;
}
.shortcut > ul > li {
    margin: 0 0.3rem;
    height: 1.2rem;
    width: 1.2rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAB6VBMVEUAAAD///+AgIBVVVUzMzMrKyskJCQgICAaGhonJyckJCQiIiIeHh4cHBwaGhokJCQdHR0aGhoaGhoeHh4dHR0cHBwcHBwbGxseHh4eHh4cHBwbGxsbGxsaGhoaGhoZGRkdHR0bGxsaGhodHR0cHBwcHBwbGxsbGxsaGhoaGhoZGRkcHBwcHBwbGxsbGxsaGhoaGhoaGhoZGRkcHBwcHBwaGhoaGhobGxsbGxsaGhoaGhoZGRkZGRkbGxsaGhoaGhoaGhoZGRkZGRkbGxsaGhoaGhoaGhoZGRkbGxsbGxsaGhoZGRkbGxsZGRkaGhoaGhoZGRkYGBgZGRkZGRkZGRkYGBgbGxsaGhoaGhoaGhoaGhoaGhoZGRkZGRkaGhoaGhoaGhoaGhoYGBgZGRkYGBgZGRkaGhoZGRkaGhoaGhoZGRkZGRkZGRkZGRkaGhoYGBgaGhoZGRkZGRkaGhoaGhoaGhoZGRkZGRkZGRkaGhoZGRkZGRkZGRkZGRkZGRkaGhoZGRkZGRkaGhoaGhoZGRkaGhoZGRkaGhoYGBgaGhoZGRkYGBgZGRkYGBgZGRkYGBgZGRkaGhoZGRkaGhoZGRkaGhoaGhoZGRkZGRkaGhoZGRkaGhoaGhoYGBgZGRkZGRkZGRkZGRkZGRn1ncfJAAAAonRSTlMAAQIDBQYHCAoNDg8REhQVGh0eIiMkJSYqKy4vMDEyMzQ4PD4/QEFCREZHSEpLTE1OT1FSU1laXmBhY2VmaGprbG9yc3R1dnp7fIGFhYaHjJCSmZucnaKkpqipqqytrq+wsrS2trm6uru+v8DBwsXGxszNz9HS1dja3N3e3+Dj5ufq7O3t7u/v8PDx8fLy8/P09PX19vb39/j4+fn6+vv8/f4we4i3AAACdElEQVR4Xu2U6VPTUBTFX5GCLSjgjiJo3RBRURYRUNHW4oaCCiiKG4qKKOCCiAtYNC3x9RlCLGkIpj1/qTOZN1CaJpWPzvj7cu89c05m3p3JJf8GnorqxmCwsXqXh2QnZ3/7mDojUE2jQlgdaz+Q42jPa5kM60hBD0+25NnaXf4IA5KiNj7c19HRNzyuiUmARfyuzP7iEQrMyl11hYRTWNclzwJ0pDiTvyKqQxKCaQ/1BAUJv7HT6j8EIN6ZSyzkdsqAdiRdrpyDgWqSkYMwMFe5Uiv/icS3LcSGrUhAKl8hjRoIlRBbSkIwRlOFJgZ5H3FgrwzWlLIKilgPcaQnBrq8wOMiWL5zIJ9BrF2aBmB0kyx0GxggnIJ5UF+2gI9ivoD3O2YQJVmJYqaMt0cjmOCtOxDwWqvJBIQa3p5RMEhMvNAVuC3VZBBKKw9cNHCbmPgVQA9Yqsld6G08cErGSx5YBJSApZq8g9jAA3VhfOFPgLIIr6WahBD28UBxDCrfmNfvd1uqSaGK6CYecIXAmkkWAjI+Lw3XFvA2W2ACStvSUCqBHXP210r4tWF5vK9jyuvkXxdB/F7qLyVBe+N2CNyJgxWlCq0Mcsj+YPVKoKdXXshHs0g8sbml7n4JUq8rTXwVhzJVkclfChF4uMZyhZ+rSKLKYl9/WUpAuekiVk7ICUi+tK/fUBQk587bnR+ws8TTfNVfv2fzxt01Jx/8oAtA9NN2YsNjGBcaBBGaGKZMEGQAYB/q7ff9FPEXDDDAiVHWX0UceA01hvnvl64PfZz++n7oVqDMRRyZBiA985C/ZS0A+RxZBYjRw2Q1FF3Zlkn+zx9zL/lo2stYzAAAAABJRU5ErkJggg==);
    background-size: 100% 100%;
    background-position: center;
}
.container > .content {
    width: 100%;
    flex-grow: 1;
    height: 0;
    overflow: hidden;
    display: flex;
}
.content-left {
    width: 27.22%;
    height: 100%;
    overflow: auto;
}
.content-left::-webkit-scrollbar {
    display: none;
}
.content-left-list {
    width: 100%;
    padding-bottom: 2.45rem;
    position: relative;
    min-height: 91.5%;
}
.content-left-item {
    width: 100%;
    padding: 0.8rem 0;
}
.content-left-item > span {
    width: 100%;
    font-weight: normal;
    font: 0.65rem / normal normal;
    text-align: left;
    word-break: break-all;
    padding-left: 0.8rem;
    padding-right: 0.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    border-right: 0.1rem solid transparent;
}
.content-left-item > span.active {
    color: #e01d20;
    border-right-color: #e01d20;
}
.content-right {
    width: 72.78%;
    height: 100%;
    overflow: hidden;
}
.content-right-list {
    width: 100%;
    height: 100%;
    overflow: auto;
}
.content-right-item {
    width: 100%;
}
.content-right-item > header {
    padding: 0 0.4rem 0 0.6rem;
    margin-top: 0.3rem;
}
.content-right-item > header > img {
    width: 100%;
    border-radius: 0.2rem;
}
.emptydiv {
    height: 0.4rem;
}
.category-list {
    width: 100%;
    margin-bottom: 2.5rem;
}
.category-list > .title {
    padding: 0.8rem 0 0.4rem;
    text-align: center;
}
.category-list > .title > h3 {
    display: inline-flex;
    padding: 0 2rem;
    font-weight: 400;
}
.category-list > .title > h3 > span {
    font-size: 0.65rem;
    line-height: 0.84rem;
    font-weight: normal;
    background-color: #fff;
    position: relative;
    z-index: 2;
    padding: 0 0.5rem;
    box-sizing: border-box;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.goods-list {
    width: 100%;
    padding: 0 0.5rem 0 0.6rem;
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
}
.goods-list > li {
    margin-right: calc(50% - 4.8em);
    width: 3.2rem;
    height: 5.4rem;
}
.goods-list > li:nth-child(3n + 0) {
    margin-right: 0;
}
.pro-panels {
    padding: 0.4rem 0;
    width: 100%;
}
.p-img {
    width: 2.4rem;
    height: 2.4rem;
    margin: 0 auto;
    position: relative;
    background-size: cover;
}
.p-name {
    color: #666;
    margin-top: 0.55rem;
    transform: scale(0.83333);
}
.p-name > span {
    width: 100%;
    color: currentColor;
    text-align: center;
    word-break: break-all;
    font: 0.6rem/normal normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>
