import {test as basetest, expect} from '@playwright/test';

type  MyFixtures = {
  Fixture1: any;
};

export const test1=basetest.extend<MyFixtures>({
    
    Fixture1:async ({}: any,use: (arg0: string) => any)=>{
        const Fixture1= "I am Fixture1";
        console.log("Fixture1 is created");
        await use(Fixture1);
        console.log("Fixture1 is destroyed");
    }
})