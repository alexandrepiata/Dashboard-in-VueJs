import test from 'ava';
import gtr from '.';

const https = 'https://github.com/sh0ji/focus-rover.git';
// const ssh = 'git@gitlab.com:wwnorton/platform/epub-build.git';
const invalid = 'github.com/sh0ji/focus-rover';

test('public https get', async (t) => {
	const tags = await gtr.get(https);
	t.is(tags.get('v1.0.0-rc.1'), '48d18c388f4e0b1a963a409bfe3d8fedb3acd50a');
	t.is(tags.get('v1.0.0-rc.2'), '8e048a0fd9cb668366eef550be445ac761efd667');
});

test('public https latest', async (t) => {
	const latest = await gtr.latest(https);
	t.is(latest[0], 'v1.0.0-rc.2');
	t.is(latest[1], '8e048a0fd9cb668366eef550be445ac761efd667');
});

// test('private ssh get', async (t) => {
//	 const tags = await gtr.get(ssh);
//	 t.is(tags.get('v1.0.0-beta.1'), 'cf1f4d2017367cda6bbf78d6624d89e26529d6be');
//	 t.is(tags.get('v1.0.0-rc.2'), '812e4e8af098a45352b1309d22141d47274994e4');
// });
//
// test('private ssh latest', async (t) => {
//	 const latest = await gtr.latest(ssh);
//	 t.is(latest[0], 'v1.0.0-rc.2');
//	 t.is(latest[1], '812e4e8af098a45352b1309d22141d47274994e4');
// });

test('invalid url', async (t) => {
	const error = await t.throws(gtr.get(invalid));
	t.is(
		error,
		`fatal: '${invalid}' does not appear to be a git repository\n` +
		'fatal: Could not read from remote repository.\n\n' +
		'Please make sure you have the correct access rights\n' +
		'and the repository exists.\n'
	);
});
