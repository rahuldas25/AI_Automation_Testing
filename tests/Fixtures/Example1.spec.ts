import { test1 } from './TestFixturesImpl.spec';
import {test} from './WorkerFixtureImpl.spec';

test('Test Fixture1', async ({ WorkFixture1 }) => {
    console.log(WorkFixture1);
    console.log()
    // You can add assertions or further test logic here
});
test('Test Fixture1 again', async ({ WorkFixture1 }) => {
    console.log(WorkFixture1);
    // You can add assertions or further test logic here
});