import { $cms } from "@jx3box/jx3box-common/js/https";

function getCode() {
    return $cms().get(`/api/cms/news`, {
        params: {
            client: "std",
            type: "code",
        },
    });
}

export { getCode };