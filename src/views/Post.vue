<template>
    <div>

    </div>
</template>

<script>
import {getPost} from "@/service/cms"
export default {
    name : "post",
    computed: {
        id() {
            return this.$route.params.id;
        }
    },
    watch: {
        id: {
            immediate: true,
            handler(val) {
                val && this.loadPost();
            }
        }
    },
    methods: {
        loadPost() {
            getPost(this.id).then((res) => {
                const data = res.data.data;

                location.href = `/${data.post_type}/${data.ID}`;
            })
        }
    }
}
</script>
