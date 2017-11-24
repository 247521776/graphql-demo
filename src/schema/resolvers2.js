// 解析器
module.exports = {
    Query: {
        allLinks: async (root, data, {mongo: {Links}}) => {
            return await Links.find({});
        }       
    },
    Mutation: {
        async createLink(root, data, {mongo: {Links}, user}) {
            const newLink = Object.assign({postedById: user && user._id}, data);
            const link = new Links(newLink);
            const response = await link.save();
            return Object.assign({id: response._id}, newLink);;
        },
        async createUser(root, data, {mongo: {Users}}) {
            const newUser = {
                name: data.name,
                email: data.authProvider.email.email,
                password: data.authProvider.email.password,
            }; 
            const user = new Users(newUser);
            const response = await user.save();
            return Object.assign({id: response._id}, newUser);
        },
        async signinUser(root, data, {mongo: {Users}}) {
            const user = await Users.findOne({email: data.email.email});
            if (data.email.password === user.password) {
                return {
                    token: `token-${user.email}`,
                    user
                };
            }
        }
    },
    Link: {
        id(root) {
            return root._id || root.id;
        },
        async postedBy({postedById}, data, {mongo: {Users}}) {
            return await Users.findOne({_id: postedById});
        }
    }
};