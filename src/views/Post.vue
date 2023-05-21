<template>
    <div>

    </div>
</template>

<script>
import {getPost} from "@/service/cms"
import { getAppID } from "@jx3box/jx3box-common/js/utils";
export default {
    name : "post",
    computed: {
        id() {
            return getAppID();
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
