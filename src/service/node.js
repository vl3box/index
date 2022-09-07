import { $node } from "@jx3box/jx3box-common/js/https";

function getDatabaseStat({ client = 'std' } = {}) {
    return $node().get(`/`, {
        params: {
            client
        }
    });
}

export { getDatabaseStat };
