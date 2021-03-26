import Parse from 'parse';

import moment from 'moment';

const parseSaveProjectsMeta = async (
    newProjectFields,
    selectedVersion,
    license,
    canonSpecification,
    content,
    versificationScheme,
) => {
    const username = 'Michael';

        const Person = Parse.Object.extend('Person');

        const ProjectMeta = Parse.Object.extend('ProjectMeta');

        const userExist = async () => {
            const personQuery = new Parse.Query(Person);
            personQuery.equalTo('name', username);
            const user = await personQuery.find();
            for (let i = 0; i < user.length; i += 1) {
                const Obj = user[i];
                return [Obj.get('name'), Obj];
            }
        };

        const listUsers = async () => {
            const users = [];
            const personQuery = new Parse.Query(Person);
            const user = await personQuery.find();
            // eslint-disable-next-line arrow-body-style
            user.forEach((element) => {
                users.push(element.get('name'));
            });
            return users;
        };

        const projectExist = async () => {
            const personQuery = new Parse.Query(ProjectMeta);
            personQuery.equalTo('projectName', newProjectFields.projectName);
            const projects = await personQuery.find();
            for (let i = 0; i < projects.length; i++) {
                const Obj = projects[i];
                return Obj.get('projectName');
            }
        };

        const saveProject = async (person) => {
            const projectMeta = new ProjectMeta();
            projectMeta.set('projectName', newProjectFields.projectName);
            projectMeta.set('bibleVersion', selectedVersion);
            projectMeta.set('language', newProjectFields.language);
            projectMeta.set('scriptDirection', newProjectFields.scriptDirection);
            projectMeta.set('versificationScheme', versificationScheme);
            projectMeta.set('canonspecification', canonSpecification);
            projectMeta.set('canoncontent', content);
            projectMeta.set('license', license);
            projectMeta.set('starred', false);
            projectMeta.set('createdAt', moment().format('DD-MM-YYYY'));
            projectMeta.set('updatedAt', moment().format('YYYY-MM-DD h:mm:ss'));
            projectMeta.set('owner', person);
            projectMeta.save();
        };

        userExist().then((userRes) => {
            if ((userRes !== undefined ? userRes[0] : userRes) !== username) {
                const person = new Person();
                person.set('name', username);
                person.set('lastname', 'Philips');
                person.set('email', 'example@mail.com');
                saveProject(person);
            } else {
                projectExist().then(async (projectRes) => {
                    if ((projectRes !== newProjectFields.projectName)) {
                            saveProject(userRes[1]);
                    } else {
                                    const newUserQuery = new Parse.Query(ProjectMeta);
                                    newUserQuery.include('owner');
                                    const result = await newUserQuery.find();
                                    console.log(result);
                                    // eslint-disable-next-line prefer-const
                    }
                    // else {
                    //     const BreakException = {};
                    //     try {
                    //         const newUserQuery = new Parse.Query(ProjectMeta);
                    //         const duplicates = [];
                    //         const filterList = [];
                    //         newUserQuery.equalTo('projectName', newProjectFields.projectName);
                    //         newUserQuery.include('owner');
                    //         const result = await newUserQuery.find();
                    //         // eslint-disable-next-line prefer-const
                    //         listUsers().then((users) => {
                    //             users.forEach((user) => {
                    //                 console.log(user);
                    //                 filterList.push(user);
                    //             });
                    //             result.forEach((element) => {
                    //                 if (element.get('owner').get('name') === username) {
                    //                     duplicates.push(element.get('owner').get('name'));
                    //                 }
                    //                 if (element.get('owner').get('name') !== (username)) {
                    //                         saveProject(userRes[1]);
                    //                         console.log('false');
                    //                         throw BreakException;
                    //                     }
                    //             });
                    //         });
                    //     } catch (e) {
                    //         if (e !== BreakException) { throw e; }
                    //     }
                    // }
                });
            }
        });
};

export default parseSaveProjectsMeta;