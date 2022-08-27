import { expect } from "chai";
import HttpAdapter from "../app/http-adapters/base-adapter";

describe('HttpAdapter', () => {
    it('should parse url with parmas', () => {
        const adapter = new HttpAdapter('/api/user/:id', 'GET');
        const id = 'jabsudytasda67s';
        adapter.parseUrlWith({ id });
        expect(adapter.url).to.equal(`/api/user/${id}`);

        const adapter2 = new HttpAdapter('/api/user/:id/:name', 'GET');
        const name = 'John';
        adapter2.parseUrlWith({ id, name });
        expect(adapter2.url).to.equal(`/api/user/${id}/${name}`);
    });
    it('should not parse url without parmas', () => {
        const adapter = new HttpAdapter('/api/user', 'GET');
        const id = 'jabsudytasda67s';
        adapter.parseUrlWith({ id });
        expect(adapter.url).to.equal(`/api/user`);
    });
});