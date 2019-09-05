export const getBuildKits = async () => {
    const buildKitURL = 'http://demo7125054.mockable.io/buildKits';
    const result = await fetch(buildKitURL);
    if (!result.ok) {
        console.error('problems with fetch result. Check the network logs.', result.status);
        throw new Error('error getting build kits');
    }
    return result.json();
}