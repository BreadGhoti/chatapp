(function (t) {
   function e(e) {
      for (var a, r, o = e[0], l = e[1], c = e[2], u = 0, m = []; u < o.length; u++) r = o[u], i[r] && m.push(i[r][0]), i[r] = 0;
      for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (t[a] = l[a]);
      d && d(e);
      while (m.length) m.shift()();
      return n.push.apply(n, c || []), s()
   }

   function s() {
      for (var t, e = 0; e < n.length; e++) {
         for (var s = n[e], a = !0, o = 1; o < s.length; o++) {
            var l = s[o];
            0 !== i[l] && (a = !1)
         }
         a && (n.splice(e--, 1), t = r(r.s = s[0]))
      }
      return t
   }
   var a = {},
      i = {
         app: 0
      },
      n = [];

   function r(e) {
      if (a[e]) return a[e].exports;
      var s = a[e] = {
         i: e,
         l: !1,
         exports: {}
      };
      return t[e].call(s.exports, s, s.exports, r), s.l = !0, s.exports
   }
   r.m = t, r.c = a, r.d = function (t, e, s) {
      r.o(t, e) || Object.defineProperty(t, e, {
         enumerable: !0,
         get: s
      })
   }, r.r = function (t) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
         value: "Module"
      }), Object.defineProperty(t, "__esModule", {
         value: !0
      })
   }, r.t = function (t, e) {
      if (1 & e && (t = r(t)), 8 & e) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var s = Object.create(null);
      if (r.r(s), Object.defineProperty(s, "default", {
            enumerable: !0,
            value: t
         }), 2 & e && "string" != typeof t)
         for (var a in t) r.d(s, a, function (e) {
            return t[e]
         }.bind(null, a));
      return s
   }, r.n = function (t) {
      var e = t && t.__esModule ? function () {
         return t["default"]
      } : function () {
         return t
      };
      return r.d(e, "a", e), e
   }, r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
   }, r.p = "/";
   var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
      l = o.push.bind(o);
   o.push = e, o = o.slice();
   for (var c = 0; c < o.length; c++) e(o[c]);
   var d = l;
   n.push([0, "chunk-vendors"]), s()
})({
   0: function (t, e, s) {
      t.exports = s("56d7")
   },
   "034f": function (t, e, s) {
      "use strict";
      var a = s("64a9"),
         i = s.n(a);
      i.a
   },
   1: function (t, e) {},
   "14b8": function (t, e) {
      t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAAApCAYAAABa8JcWAAAC7ElEQVR4Xu2c21JjMQwEk///6FAFPIQiZzPNGV+yaZ4nktzS2I7Z5Xq73W4XfyQggakErhpvKm+TSeCTgMZzECSwgIDGWwDdlBLQeM6ABBYQiIx3vV5RafS95ij+bnGOILTqRJAvlwvNS+Mf6VfNA62f8qHrOjMPGu8BPdqAnRtMhzXR/6986Lo03jeB0SfnGdD3n53Z4MRIVEPrf5WNia7rzDx44nniUd9d6IBqvN+INZ7G03hPbkwUULLRaDyNR+fKE+8JMWy80d+Rjgp6t7z0tTBpJHZP8IF368vM9f448WYmTh4b6MDR+ql+tGFa9QSeiiStemgcqm/1ZWZejfega6MN3xqUyD0nRDMH8d02Yo2n8Q6tqfG+0IzYiDWextN4T141Nd6TaxPdoal+9BWxVc+J2+WPj7bqoXGovtWXmXmHnHi08fQXsjQ+fU2l8Y/0I3bKVm1JnFfvS4t/wupek+TVeJQq0CcNGPGoAEr8p1Tj/Y1k0neN9ze20aeSBmi83yhbhm/xj5p9J0ryajxKFeiTBmg8jXf4T4HoAIHZ/JS2djj6XWtV3tZjAOVM9av4tPLSuZ2Z1xOPTiPQtxpP44AS/Y53R+DljUefZam+dWKsytuqv2Ww0fVQzlTf4jAz75ATjy6A6luDsipvq/7WwI2uh3Km+haHmXk13oOu0atdq2GtOLsNIl0X1e+23qQejafxDuekZQAah+qTQU80M/NqPI2n8b4JaLxvEKOvfC3Qu8VJdvdEs2pdrbzJGu81M/O+9Z9+aIHeLQ4dOB9Xvgi0+pjw13heNb1qrr5q0p3vSD/6ikjrpP874VXqT3bWM5rWCUDjUP2ZNXrVXHDytBq8W5zdBpHyofrd1pvU41VzgeFbJ3bS4DOalgFoHKo/s0ZPvAUGaDV4tzi7DSLlQ/W7rTepJzrxkkBqJCCBnIDGy1mplECNgMaroTSQBHICGi9npVICNQIar4bSQBLICWi8nJVKCdQIfABrxxXC1xUtYQAAAABJRU5ErkJggg=="
   },
   2: function (t, e) {},
   2794: function (t, e, s) {
      "use strict";
      var a = s("378c"),
         i = s.n(a);
      i.a
   },
   "2c73": function (t, e, s) {},
   3: function (t, e) {},
   "378c": function (t, e, s) {},
   "3bc0": function (t, e, s) {},
   4: function (t, e) {},
   5506: function (t, e) {
      function s(t) {
         var e = new Error("Cannot find module '" + t + "'");
         throw e.code = "MODULE_NOT_FOUND", e
      }
      s.keys = function () {
         return []
      }, s.resolve = s, t.exports = s, s.id = "5506"
   },
   "56d7": function (t, e, s) {
      "use strict";
      s.r(e);
      var a = s("2b0e"),
         i = function () {
            var t = this,
               e = t.$createElement,
               s = t._self._c || e;
            return s("div", {
               attrs: {
                  id: "app"
               }
            }, ["login" == this.$store.state.view ? s("Login") : "chat" == this.$store.state.view ? s("Chat") : "signup" == this.$store.state.view ? s("CreateUser") : t._e(), s("notifications", {
               attrs: {
                  group: "auth",
                  position: "bottom left"
               }
            })], 1)
         },
         n = [],
         r = function () {
            var t = this,
               e = t.$createElement,
               a = t._self._c || e;
            return a("div", {
               staticClass: "login"
            }, [a("section", {
               staticClass: "hero is-success is-fullheight"
            }, [a("div", {
               staticClass: "hero-body"
            }, [a("div", {
               staticClass: "container has-text-centered"
            }, [a("div", {
               staticClass: "column is-4 is-offset-4"
            }, [a("img", {
               staticClass: "logo",
               attrs: {
                  src: s("cf05"),
                  width: "150px"
               }
            }), a("h3", {
               staticClass: "title has-text-grey"
            }, [t._v("Login")]), a("div", {
               staticClass: "box"
            }, [a("figure", {
               staticClass: "avatar"
            }, ["d41d8cd98f00b204e9800998ecf8427e" != t.nameHash && "" != t.nameHash ? a("v-gravatar", {
               attrs: {
                  hash: t.nameHash
               }
            }) : a("img", {
               attrs: {
                  src: "https://placehold.it/80x80"
               }
            })], 1), a("form", [a("div", {
               staticClass: "field"
            }, [a("div", {
               staticClass: "control"
            }, [a("input", {
               directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: t.nameField,
                  expression: "nameField"
               }],
               staticClass: "input is-large",
               attrs: {
                  type: "name",
                  placeholder: "Your Name",
                  autofocus: ""
               },
               domProps: {
                  value: t.nameField
               },
               on: {
                  input: [function (e) {
                     e.target.composing || (t.nameField = e.target.value)
                  }, t.update]
               }
            })])]), a("div", {
               staticClass: "field"
            }, [a("div", {
               staticClass: "control"
            }, [a("input", {
               directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: t.passwordField,
                  expression: "passwordField"
               }],
               staticClass: "input is-large",
               attrs: {
                  type: "password",
                  placeholder: "Your Password"
               },
               domProps: {
                  value: t.passwordField
               },
               on: {
                  input: function (e) {
                     e.target.composing || (t.passwordField = e.target.value)
                  }
               }
            })])]), a("button", {
               staticClass: "button is-block is-primary is-large is-fullwidth",
               attrs: {
                  type: "button"
               },
               on: {
                  click: function (e) {
                     t.auth(t.nameField, t.passwordField)
                  }
               }
            }, [t._v("Login")])])]), a("p", {
               staticClass: "has-text-grey"
            }, [a("a", {
               on: {
                  click: function (e) {
                     t.$store.commit("changeView", "signup")
                  }
               }
            }, [t._v("Sign Up")])])])])])])])
         },
         o = [],
         l = s("8237"),
         c = s.n(l),
         d = {
            data() {
               return {
                  nameField: "",
                  passwordField: "",
                  nameHash: ""
               }
            },
            methods: {
               auth(t, e) {
                  t in this.$store.state.users ? this.$store.state.users[t] === e ? (this.$store.commit("login", t), this.$notify({
                     group: "auth",
                     type: "success",
                     text: "Logged In successfully. Welcome back " + t + "!"
                  })) : this.$notify({
                     group: "auth",
                     type: "error",
                     text: "Wrong password, please try again."
                  }) : this.$notify({
                     group: "auth",
                     type: "error",
                     text: "User does not exist."
                  })
               },
               update() {
                  this.nameHash = c()(this.nameField)
               }
            },
            computed: {
               state() {
                  return this.$store.state.auth
               }
            }
         },
         u = d,
         m = (s("6df7"), s("2877")),
         h = Object(m["a"])(u, r, o, !1, null, "04b66534", null),
         p = h.exports,
         v = function () {
            var t = this,
               e = t.$createElement,
               a = t._self._c || e;
            return a("div", {
               staticClass: "login"
            }, [a("section", {
               staticClass: "hero is-success is-fullheight"
            }, [a("div", {
               staticClass: "hero-body"
            }, [a("div", {
               staticClass: "container has-text-centered"
            }, [a("div", {
               staticClass: "column is-4 is-offset-4"
            }, [a("img", {
               staticClass: "logo",
               attrs: {
                  src: s("cf05"),
                  width: "150px"
               }
            }), a("h3", {
               staticClass: "title has-text-grey"
            }, [t._v("Create A New User")]), a("div", {
               staticClass: "box"
            }, [a("figure", {
               staticClass: "avatar"
            }, ["d41d8cd98f00b204e9800998ecf8427e" != t.nameHash && "" != t.nameHash ? a("v-gravatar", {
               attrs: {
                  hash: t.nameHash
               }
            }) : a("img", {
               attrs: {
                  src: "https://placehold.it/80x80"
               }
            })], 1), a("form", [a("div", {
               staticClass: "field"
            }, [a("div", {
               staticClass: "control"
            }, [a("input", {
               directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: t.nameField,
                  expression: "nameField"
               }],
               staticClass: "input is-large",
               attrs: {
                  type: "name",
                  placeholder: "Choose a new name",
                  autofocus: ""
               },
               domProps: {
                  value: t.nameField
               },
               on: {
                  input: [function (e) {
                     e.target.composing || (t.nameField = e.target.value)
                  }, t.update]
               }
            })])]), a("div", {
               staticClass: "field"
            }, [a("div", {
               staticClass: "control"
            }, [a("input", {
               directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: t.passwordField,
                  expression: "passwordField"
               }],
               staticClass: "input is-large",
               attrs: {
                  type: "password",
                  placeholder: "Choose your password wisely"
               },
               domProps: {
                  value: t.passwordField
               },
               on: {
                  input: function (e) {
                     e.target.composing || (t.passwordField = e.target.value)
                  }
               }
            })])]), a("button", {
               staticClass: "button is-block is-info is-large is-fullwidth",
               attrs: {
                  type: "button"
               },
               on: {
                  click: function (e) {
                     t.auth(t.nameField, t.passwordField)
                  }
               }
            }, [t._v("Create User")])])]), a("p", {
               staticClass: "has-text-grey"
            }, [a("span", {
               staticClass: "shadow-text"
            }, [t._v("Already a user?")]), a("a", {
               on: {
                  click: function (e) {
                     t.$store.commit("changeView", "login")
                  }
               }
            }, [t._v("Login")])])])])])])])
         },
         g = [],
         f = {
            data() {
               return {
                  nameField: "",
                  passwordField: "",
                  nameHash: ""
               }
            },
            methods: {
               auth(t, e) {
                  if (t in this.$store.state.users) this.$notify({
                     group: "auth",
                     type: "error",
                     text: "User Already exist, choose a different Name."
                  });
                  else {
                     this.$store.commit("login", t);
                     var s = {
                        name: t,
                        password: e
                     };
                     this.$store.commit("addUser", s)
                  }
               },
               update() {
                  this.nameHash = c()(this.nameField)
               }
            },
            computed: {
               state() {
                  return this.$store.state.auth
               }
            }
         },
         C = f,
         b = (s("a002"), Object(m["a"])(C, v, g, !1, null, "ea2e694a", null)),
         w = b.exports,
         y = function () {
            var t = this,
               e = t.$createElement,
               s = t._self._c || e;
            return s("div", {
               staticClass: "login"
            }, [s("nav", {
               staticClass: "navbar has-shadow"
            }, [t._m(0), s("div", {
               staticClass: "navbar-menu"
            }, [s("div", {
               staticClass: "navbar-end"
            }, [s("div", {
               staticClass: "navbar-item with-sep"
            }, [s("v-gravatar", {
               staticClass: "gravatar-icon",
               attrs: {
                  hash: t.nameHash(this.$store.state.currentUser)
               }
            }), s("h3", {
               staticClass: "name-style"
            }, [t._v(t._s(this.$store.state.currentUser))])], 1), s("div", {
               staticClass: "navbar-item"
            }, [s("div", {
               staticClass: "buttons",
               on: {
                  click: function (e) {
                     t.deauth()
                  }
               }
            }, [s("a", {
               staticClass: "button is-light logout-btn"
            }, [t._v("\n              Logout\n            ")])])])])])]), s("section", {
               staticClass: "main-content columns is-fullheight full-with-nav"
            }, [s("aside", {
               staticClass: "people column is-3 is-fullheight section"
            }, [s("p", {
               staticClass: "menu-label online-text"
            }, [t._v("Online people (" + t._s(t.onlinePeople(t.members)) + ")")]), s("ul", {
               staticClass: "menu-list"
            }, t._l(t.members, function (e, a) {
               return s("div", {
                  key: a,
                  staticClass: "card"
               }, [s("div", {
                  on: {
                     click: function (s) {
                        t.selectUser(e.clientData.name)
                     }
                  }
               }, [t.selectedUser == e.clientData.name ? s("div", {
                  staticClass: "card-content card-selected"
               }, [s("div", {
                  staticClass: "media"
               }, [s("div", {
                  staticClass: "media-left"
               }, [s("figure", {
                  staticClass: "image is-48x48"
               }, [s("v-gravatar", {
                  staticClass: "gravatar-icon",
                  attrs: {
                     hash: t.nameHash(t.displayMember(e))
                  }
               })], 1)]), s("div", {
                  staticClass: "media-content"
               }, [s("p", {
                  staticClass: "user-name is-4"
               }, [t._v(t._s(t.displayMember(e)))])])])]) : s("div", {
                  staticClass: "card-content card-hoverable"
               }, [s("div", {
                  staticClass: "media"
               }, [s("div", {
                  staticClass: "media-left"
               }, [s("figure", {
                  staticClass: "image is-48x48"
               }, [s("v-gravatar", {
                  staticClass: "gravatar-icon",
                  attrs: {
                     hash: t.nameHash(t.displayMember(e))
                  }
               })], 1)]), s("div", {
                  staticClass: "media-content"
               }, [s("p", {
                  staticClass: "user-name is-4"
               }, [t._v(t._s(t.displayMember(e)))])])])])])])
            }), 0)]), s("div", {
               staticClass: "container column is-9"
            }, [s("section", {
               staticClass: "hero is-success is-fullheight full-with-nav is-grey"
            }, [s("div", {
               staticClass: "section"
            }, t._l(t.messages, function (e, a) {
               return s("div", {
                  key: a,
                  staticClass: "new-message"
               }, [e[1] == t.$store.state.currentUser ? s("div", [s("v-gravatar", {
                  staticClass: "gravatar mine",
                  attrs: {
                     hash: t.nameHash(e[1]),
                     width: "35"
                  }
               }), s("div", {
                  staticClass: "card message-card mine"
               }, [t.checkEncode(e[0]) ? s("div", [s("div", {
                  staticClass: "card-content message-content"
               }, [s("div", {
                  staticClass: "content"
               }, [s("img", {
                  attrs: {
                     src: "data:image/png;base64," + e[0]
                  }
               })])])]) : s("div", [s("div", {
                  staticClass: "card-content message-content"
               }, [s("div", {
                  staticClass: "content"
               }, [t._v(t._s(e[0]))])])])])], 1) : s("div", ["" != t.selectedUser && e[1] == t.selectedUser ? s("div", [s("v-gravatar", {
                  staticClass: "gravatar",
                  attrs: {
                     hash: t.nameHash(e[1]),
                     width: "35"
                  }
               }), s("div", {
                  staticClass: "card message-card"
               }, [t.checkEncode(e[0]) ? s("div", [s("div", {
                  staticClass: "card-content message-content"
               }, [s("div", {
                  staticClass: "content"
               }, [s("img", {
                  attrs: {
                     src: "data:image/png;base64," + e[0]
                  }
               })])])]) : s("div", [s("div", {
                  staticClass: "card-content message-content"
               }, [s("div", {
                  staticClass: "content"
               }, [t._v(t._s(e[0]))])])])])], 1) : t._e()]), s("br")])
            }), 0), s("form", {
               staticClass: "control",
               attrs: {
                  onsubmit: "return false;"
               }
            }, [s("div", {
               staticClass: "file is-boxed"
            }, [s("label", {
               staticClass: "file-label"
            }, [s("input", {
               staticClass: "file-input",
               attrs: {
                  accept: "image/*",
                  type: "file",
                  name: "resume"
               },
               on: {
                  change: t.onFileChange
               }
            }), t._m(1)])]), s("input", {
               directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: t.msg,
                  expression: "msg"
               }],
               staticClass: "input typewrite",
               attrs: {
                  type: "text",
                  placeholder: "Enter your message.."
               },
               domProps: {
                  value: t.msg
               },
               on: {
                  input: function (e) {
                     e.target.composing || (t.msg = e.target.value)
                  }
               }
            }), s("a", {
               staticClass: "button send-button",
               attrs: {
                  value: "Send",
                  type: "submit"
               },
               on: {
                  click: function (e) {
                     t.sendMessage(t.msg)
                  }
               }
            }, [t._v("SEND")])])])])])])
         },
         x = [function () {
            var t = this,
               e = t.$createElement,
               a = t._self._c || e;
            return a("div", {
               staticClass: "navbar-brand"
            }, [a("a", {
               staticClass: "navbar-item"
            }, [a("img", {
               attrs: {
                  src: s("14b8"),
                  width: "130px"
               }
            })])])
         }, function () {
            var t = this,
               e = t.$createElement,
               s = t._self._c || e;
            return s("span", {
               staticClass: "file-cta"
            }, [s("span", {
               staticClass: "mdi mdi-image"
            }), s("span", {
               staticClass: "file-label"
            }, [t._v("\n                  Choose an Image…\n                ")])])
         }],
         _ = s("07e8"),
         U = s.n(_),
         A = s("4793"),
         M = s.n(A),
         j = {
            data() {
               return {
                  client_id: "ye83bXDLnHbIiwRc",
                  members: [],
                  msg: "",
                  messages: [],
                  imgURL: null,
                  drone: new ScaleDrone("ye83bXDLnHbIiwRc", {
                     data: {
                        name: this.$store.state.currentUser,
                        color: "#000000"
                     }
                  }),
                  selectedUser: ""
               }
            },
            methods: {
               deauth() {
                  this.$store.commit("logout")
               },
               nameHash(t) {
                  return c()(t)
               },
               sendMessage(t) {
                  this.drone.publish({
                     room: "observable-instadiet-room",
                     message: t
                  }), this.msg = ""
               },
               updateMembers(t) {
                  for (var e = 0; e < t.length; e++) "undefined" != typeof t[e] && t[e].clientData.name != this.$store.state.currentUser && this.members.push(t[e])
               },
               addMember(t) {
                  "undefined" != typeof t && t.clientData.name != this.$store.state.currentUser && this.members.push(t)
               },
               removeMember(t) {
                  const e = this.members.findIndex(e => e.id === t);
                  this.members.splice(e, 1)
               },
               displayMember(t) {
                  if ("undefined" != typeof t) return t.clientData.name
               },
               onlinePeople(t) {
                  return t.length, t.length
               },
               addMsgToHistory(t, e) {
                  this.messages.push([t, e])
               },
               selectUser(t) {
                  this.selectedUser = t
               },
               onFileChange(t) {
                  const e = t.target.files[0];
                  this.encodeImg(URL.createObjectURL(e))
               },
               encodeImg(t) {
                  U()(t).then(t => {
                     this.sendMessage(t), console.log(t)
                  }).catch(t => {
                     console.log(t)
                  })
               },
               checkEncode(t) {
                  return M()(t)
               }
            },
            mounted() {
               var t = this.drone;
               t.on("open", e => {
                  if (e) return console.error(e);
                  console.log("Successfully connected to Scaledrone");
                  const s = t.subscribe("observable-instadiet-room");
                  s.on("open", t => {
                     if (t) return console.error(t);
                     console.log("Successfully joined room")
                  }), s.on("members", t => {
                     var e = t;
                     this.updateMembers(e)
                  }), s.on("member_join", t => {
                     console.log("new"), this.addMember(t)
                  }), s.on("member_leave", ({
                     id: t
                  }) => {
                     console.log("ooh"), this.removeMember(t)
                  }), s.on("data", (t, e) => {
                     e && this.addMsgToHistory(t, e.clientData.name)
                  })
               }), t.on("close", t => {
                  console.log("Connection was closed", t)
               }), t.on("error", t => {
                  console.error(t)
               })
            }
         },
         F = j,
         H = (s("2794"), Object(m["a"])(F, y, x, !1, null, "249ceee5", null)),
         P = H.exports,
         S = {
            name: "app",
            components: {
               Login: p,
               Chat: P,
               CreateUser: w
            }
         },
         k = S,
         D = (s("034f"), Object(m["a"])(k, i, n, !1, null, null, null)),
         N = D.exports,
         $ = s("2f62");
      a["default"].use($["a"]);
      var I = new $["a"].Store({
            state: {
               auth: "logged out",
               view: "login",
               users: {
                  ahmed: "ahmed123",
                  mohamed: "mohamed123",
                  ted: "ted123",
                  alex: "alex123"
               },
               currentUser: ""
            },
            mutations: {
               changeView(t, e) {
                  t.view = e
               },
               login(t, e) {
                  t.currentUser = e, t.auth = "logged in", t.view = "chat"
               },
               logout(t) {
                  t.currentUser = "", t.auth = "logged out", t.view = "login"
               },
               addUser(t, e) {
                  t.users[e.name] = e.password
               }
            },
            actions: {}
         }),
         O = s("ee98"),
         E = s.n(O),
         L = s("e06a"),
         Q = s.n(L);
      s("92c6");
      a["default"].use(E.a), a["default"].component("v-gravatar", Q.a), a["default"].config.productionTip = !1, new a["default"]({
         store: I,
         render: function (t) {
            return t(N)
         }
      }).$mount("#app")
   },
   "64a9": function (t, e, s) {},
   "6df7": function (t, e, s) {
      "use strict";
      var a = s("2c73"),
         i = s.n(a);
      i.a
   },
   a002: function (t, e, s) {
      "use strict";
      var a = s("3bc0"),
         i = s.n(a);
      i.a
   },
   cf05: function (t, e, s) {
      t.exports = s.p + "chatapp/img/logo.png"
   }
});
//# sourceMappingURL=app.d905f31b.js.map
