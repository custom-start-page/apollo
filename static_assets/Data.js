(function() {
    class Data {
        async get() {
            return await fetch('static_assets/data.json')
                .then(res => res.json())
                .then(out => {
                    return out;
                })
                .catch(err => { throw err });
        }
    }

    window.Data = new Data();
})()
