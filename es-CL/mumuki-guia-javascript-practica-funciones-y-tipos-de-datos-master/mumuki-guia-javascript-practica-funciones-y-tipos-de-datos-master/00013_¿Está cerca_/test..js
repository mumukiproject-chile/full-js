it('estaCerca(443)', () => {
    assert(estaCerca(443));
});
it('estaCerca(442)', () => {
    assert(estaCerca(442));
});
it('estaCerca(441)', () => {
    assert(estaCerca(441));
});
it('estaCerca(439)', () => {
    assert(estaCerca(439));
});
it('estaCerca(438)', () => {
    assert(estaCerca(438));
});
it('estaCerca(437)', () => {
    assert(estaCerca(437));
});
it('NO estaCerca(440)', () => {
    assert(!estaCerca(440));
});
it('NO estaCerca(420)', () => {
    assert(!estaCerca(420));
});
it('NO estaCerca(460)', () => {
    assert(!estaCerca(460));
});