<template>
    <tr>
        <td>美人图</td>
        <td :title="server">
            <el-select v-model="server" placeholder="区服" size="mini" class="u-select-meirentu">
                <el-option v-for="item in servers" :key="item" :label="item" :value="item"></el-option>
            </el-select>
        </td>
        <td>
            <el-tooltip class="item" effect="dark" :content="(meirentu && meirentu.desc) || '无'" placement="bottom">
                <div>
                    {{ (meirentu && meirentu.name) || "今日暂无画像" }}
                </div>
            </el-tooltip>
        </td>
    </tr>
</template>

<script>
import { getMeirentu } from "@/service/spider";
import servers from "@jx3box/jx3box-data/data/server/server_cn.json";
export default {
    data() {
        return {
            servers,
            server: "蝶恋花",
            meirentu: null,
        }
    },
    computed: {
        my_server: function() {
            return this.$store.state.server;
        },
    },
    watch: {
        'my_server': function(val) {
            val && (this.server = val);
        },
        server: {
            immediate: true,
            handler(val) {
                val && this.loadMeirentu();
            }
        },
    },
    methods: {
        // 获取美人图
        loadMeirentu() {
            getMeirentu(this.server).then(res => {
                this.meirentu = res.data.data;
            })
        },
    }
}
</script>
