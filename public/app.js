"use strict";

var app = app || {};
app.models = app.models || {};
app.views = app.view || {};
app.collections = app.collections || {};
app.router = app.router || {};

app.apiUrl = "https: //api.clashofclans.com/v1/clans/";
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*global app Backbone */

app.models = app.models || {};

var User = function (_Backbone$Model) {
    _inherits(User, _Backbone$Model);

    function User() {
        _classCallCheck(this, User);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(User).apply(this, arguments));
    }

    _createClass(User, [{
        key: "defaults",


        //Define some defaults
        value: function defaults() {
            return {
                name: "",
                role: "",
                expLevel: 0,
                league: {},
                trophies: {},
                clanRank: 0,
                previousClanRank: 0,
                donations: 0,
                donationsRecieved: 0
            };
        }
    }, {
        key: "initialize",
        value: function initialize(options) {}
    }]);

    return User;
}(Backbone.Model);

app.models.user = User;
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*global app, Backbone, _ */

app.collections = app.collections || {};

var Clan = function (_Backbone$Collection) {
    _inherits(Clan, _Backbone$Collection);

    function Clan(options) {
        _classCallCheck(this, Clan);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Clan).call(this, options));

        _this.model = app.models.user;
        _this.clanTag = options.clanTag;
        _.bindAll(_this, 'fetch');

        return _this;
    }

    _createClass(Clan, [{
        key: "fetch",
        value: function fetch() {
            $.getJSON(app.apiUrl + "%23PVLU9G9/members", function (data) {
                console.log(data);
            });
            // $.get(app.apiUrl + "%23PVLU9G9/members",
            //     function(response) {
            //         alert("success");
            //         console.log(response)
            //     })
            //     .done(function(response) {
            //         alert("second success");
            //         console.log(response)

            //     })
            //     .fail(function(response) {
            //         alert("error");
            //         console.log(response)

            //     })
        }
    }]);

    return Clan;
}(Backbone.Collection);

app.collections.clan = Clan;
'use strict';

/*global app Backbone */

$(function () {

    app.Parthenon = new app.collections.clan({
        clanTag: '%23PVLU9G9'
    });

    app.Parthenon.fetch();
});