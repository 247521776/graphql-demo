const links = [
    {
        id: 1,
        url: 'www.baidu.com',
        description: 'baidu'
    },
    {
        id: 2,
        url: 'www.google.com',
        description: 'google'
    }
];

// 解析器
module.exports = {
    Query: {
        allLinks: () => links        
    },
    Mutation: {
        createLink(_, link) {
            const newLink = Object.assign({id: links.length + 1}, link);
            links.push(newLink);
            return newLink;
        }
    }
};