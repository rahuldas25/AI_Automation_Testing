import {test as basetest, expect} from '@playwright/test';

type  MyWorkFixture = {
  WorkFixture1: any;
};

export const test=basetest.extend<MyWorkFixture>({

    WorkFixture1:[async ({}: any,use: (arg0: string) => any)=>{
        const WorkFixture1= "I am WorkFixture1";
        console.log("WorkFixture1 is created");
        await use(WorkFixture1);
        console.log("WorkFixture1 is destroyed");
    },{scope:'worker'}]
});