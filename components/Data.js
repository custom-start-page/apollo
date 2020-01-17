
export default class Data {
    async get() {
        return await fetch('/data.json')
            .then(res => res.json())
            .then(out => {
                return out;
            })
            .catch(err => { throw err });
    }
}
