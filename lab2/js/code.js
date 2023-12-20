const results = {
    success: [
        "max-length", "no-amd", "prefer-arrow-functions"
    ],
    failure: [
        "no-var", "var-on-top", "linebreak"
    ],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makelist(arr) {
    const failureitems = [];
    arr.forech((element) => {
        failureitems.push;
    });
    return failureitems;
}

const failurelist = makelist(results.success);

console.log(failurelist.join('\n'));
