beforeEach(function () {
    this.addMatchers({
        toBePlaying: function (expectedSong) {
            var player = this.actual;
            return player.currentlyPlayingSong === expectedSong &&
                player.isPlaying;
        }
    });
});

_global_namespace_things = [];

var _captured_global_namespace = this;

for (var prop in _captured_global_namespace) {
    _global_namespace_things.push(prop);
}
