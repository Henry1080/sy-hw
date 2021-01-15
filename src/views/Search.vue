<template>
    <div class="search-container">
        <div class="search-container-head">
            <a href="#" @click="goback" class="goback"></a>
            <input type="text" class="search-container-head-input" placeholder="FreeBuds Pro" />
            <span>搜索</span>
        </div>
        <div class="search-hot">
            <header>
                <p>热门搜索</p>
            </header>
            <section>
                <ul>
                    <li v-for="item in searchlist" :key="item.id">
                        <a href="#">
                            <span>{{ item.txt }}</span>
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            searchlist: [],
        };
    },
    methods: {
        goback() {
            this.$router.go(-1);
        },
        getData() {
            let that = this;
            let url = 'http://localhost:8080/data/searchlist.json';
            axios
                .get(url)
                .then(function(response) {
                    console.log(response);
                    that.searchlist = response.data.list;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
    },
    created() {
        this.getData();
    },
};
</script>

<style scoped>
.search-container {
    width: 100%;
    background-color: #ffffff;
}

.search-container-head {
    /* position: fixed;
    left: 0;
    right: 0;
    z-index: 300; */
    width: 100%;
    min-height: 2rem;
    margin: 0 auto;
    max-width: 720px;
    display: flex;
    align-items: center;
}

.search-container-head > .goback {
    flex-shrink: 0;
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    margin-left: 0.8rem;
    background: rgba(0, 0, 0, 0) url(data:image/png;base64,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) scroll no-repeat 50%;
    -webkit-background-size: 1.2rem 1.2rem;
    background-size: 1.2rem 1.2rem;
}

.search-container-head-input {
    flex-grow: 1;
    margin-left: 0.4rem;
    height: 1.6rem;
    background-color: rgba(155, 155, 155, 0.1);
    border-radius: 0.8rem;
    overflow: hidden;
    text-align: left;
    border: none;
}

.search-container-head > span {
    flex-shrink: 0;
    padding: 0 0.4rem;
    margin: 0 0.3rem;
    height: 1.2rem;
    line-height: 1.2rem;
    width: auto;
    text-align: center;
    font-size: 0.65rem;
    color: #4c4c4c;
}

input::-webkit-input-placeholder {
    color: #b9b3b3;
    font-size: 16px;
    padding-left: 35px;
}
.search-hot {
    padding: 0.8rem;
    margin-bottom: 0.4rem;
    background-color: #fff;
}
.search-hot > header {
    padding: 0.25rem 0 0.1rem;
}
.search-hot > header > p {
    font-size: 0.65rem;
    font-weight: bold;
}
.search-hot ul {
    max-height: 5.6rem;
    margin-left: -0.4rem;
    overflow: hidden;
}
.search-hot ul > li {
    max-width: 100%;
    float: left;
    padding: 0.35rem 0;
}
.search-hot ul > li > a {
    font-size: 0.55rem;
    line-height: 1.3rem;
    height: 1.2rem;
    text-align: center;
    margin-left: 0.4rem;
    padding: 0 0.6rem;
    display: flex;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 0.1rem;
    background-color: #f9f9f9;
}
.search-hot ul > li > a > span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex: 1;
}
</style>
