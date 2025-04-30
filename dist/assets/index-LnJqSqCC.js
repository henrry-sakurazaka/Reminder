import {
  g as ke,
  i as Se,
  a as et,
  b as tt,
  c as st,
  G as it,
  o as W,
  s as X,
  d as B,
  e as nt,
  f as ot,
  q as ye,
  h as Z,
  w as Q,
  T as Te,
  j as ve,
  u as Ce,
  k as Ne,
  l as at,
  m as De,
  n as rt,
  p as ct,
  r as we,
  E as lt,
  t as dt,
  v as ut,
} from './firebase-CAJAbvHH.js';
import './vite-plugin-node-polyfills-CYF0W5wK.js';
import { r as i, j as e, d as mt, b as pt } from './vendor-BEztx3UH.js';
import { B as gt } from './react-router-dom-Djf-viZn.js';
import { P as l } from './prop-types-BiVUseAU.js';
import { D as ft } from './react-datepicker-C0NVZxc2.js';
import { v as ht } from './uuid-BKT09osN.js';
import { u as F, a as xt, b as q } from './react-router-BqYFP2zy.js';
import './tslib-BGVaTf34.js';
import './idb-BXWtuYvb.js';
import './scheduler-DYLXRpC5.js';
import './@remix-run-BIrGyY9Z.js';
import './clsx-B-dksMZM.js';
import './date-fns-DXCimDFB.js';
import './react-onclickoutside-D9wCJI1E.js';
import './@floating-ui-C_tFKrs3.js';
(function () {
  const n = document.createElement('link').relList;
  if (n && n.supports && n.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) a(o);
  new MutationObserver((o) => {
    for (const r of o)
      if (r.type === 'childList')
        for (const d of r.addedNodes)
          d.tagName === 'LINK' && d.rel === 'modulepreload' && a(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(o) {
    const r = {};
    return (
      o.integrity && (r.integrity = o.integrity),
      o.referrerPolicy && (r.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (r.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (r.credentials = 'omit')
          : (r.credentials = 'same-origin'),
      r
    );
  }
  function a(o) {
    if (o.ep) return;
    o.ep = !0;
    const r = s(o);
    fetch(o.href, r);
  }
})();
const Ee = {
    apiKey: 'AIzaSyAYV9vGuuJW0As2r6kZnDmEXdRWPBWWR4c',
    authDomain: 'reminder5-27ef0.firebaseapp.com',
    projectId: 'reminder5-27ef0',
    storageBucket: 'reminder5-27ef0.firebasestorage.app',
    messagingSenderId: void 0,
    appId: void 0,
    measurementId: void 0,
    databaseURL: 'https://reminder5-27ef0.firebaseio.com',
  },
  Ae = ke().length ? et() : Se(Ee),
  D = tt(Ae),
  L = st(Ae);
new it();
function jt() {
  const t = JSON.parse(localStorage.getItem('tasks')) || [];
  t.forEach((n) => {
    const s = new Date(n.notificationTime).getTime(),
      a = new Date().getTime(),
      o = n.isNotified;
    if (s <= a && !o) {
      yt(n);
      const r = t.filter((d) => d.id !== n.id);
      localStorage.setItem('tasks', JSON.stringify(r));
    }
  });
}
const yt = (t) => {
  Notification.permission === 'granted'
    ? new Notification('Reminder', {
        body: `Task: ${t.content}`,
        icon: '/favicon.png',
        tag: 'unique-notification-id',
      })
    : Notification.permission !== 'denied' &&
      Notification.requestPermission().then((n) => {
        n === 'granted' &&
          new Notification('Reminder', {
            body: `Task: ${t.content}`,
            tag: 'unique-notification-id',
          });
      });
};
setInterval(jt, 6e4);
const Ie = i.createContext(),
  Re = i.createContext(),
  Tt = [
    {
      title: 'Make a restaurant reservation',
      description: 'user tasks',
      type: 'string',
      id: 1,
      content: 'Make a restaurant reservation',
      editing: !1,
      completed: !1,
      reserve: !1,
      editingLock: !1,
      editingColor: !1,
      editingDateTime: !1,
      notification: !1,
      shouldHandleNotifications: !1,
    },
    {
      title: 'send a letter',
      description: 'user tasks',
      type: 'string',
      id: 2,
      content: 'send a letter',
      editing: !1,
      completed: !1,
      reserve: !1,
      editingLock: !1,
      editingColor: !1,
      editingDateTime: !1,
      notification: !1,
      shouldHandleNotifications: !1,
    },
    {
      title: 'buy flowers',
      description: 'user tasks',
      type: 'string',
      id: 3,
      content: 'buy flowers',
      editing: !1,
      completed: !1,
      reserve: !1,
      editingLock: !1,
      editingColor: !1,
      editingDateTime: !1,
      notification: !1,
      shouldHandleNotifications: !1,
    },
  ],
  vt = (t, n) => {
    switch (n.type) {
      case 'todo/add':
        return [...t, n.todo];
      case 'todo/delete':
        return t.filter((s) => s.id !== n.todo.id);
      case 'todo/update':
        return t.map((s) =>
          s.id === n.todo.id ? { ...s, ...n.todo } : { ...s }
        );
      case 'todo/complete':
        return t.map((s) =>
          s.id === n.todo.id ? { ...s, ...n.todo } : { ...s }
        );
      case 'todo/reset':
        return [];
      case 'todo/reserve':
        return t.map((s) =>
          s.id === n.todo.id
            ? { ...s, editingLock: !0 }
            : { ...s, editingLock: !1 }
        );
      case 'todo/reserveColor':
        return t.map((s) =>
          s.editingDateTime
            ? { ...s, editingColor: !0 }
            : { ...s, editingColor: !1 }
        );
      case 'todo/editingDateTime':
        return t.map((s) =>
          s.editingLock
            ? { ...s, editingDateTime: !0 }
            : { ...s, editingDateTime: !1 }
        );
      case 'FETCH_TODOS':
        return n.payload;
      case 'complete2':
        return t.map((s) =>
          s.id === n.todo.id ? { ...s, completed: !0 } : { ...s }
        );
      case 'todo/notification':
        return t.map((s) =>
          s.id === n.todo.id
            ? { ...s, notification: !0, shouldHandleNotifications: !0 }
            : { ...s }
        );
      default:
        return t;
    }
  },
  Pe = ({ children: t }) => {
    const [n, s] = i.useReducer(vt, { todoList: [] }),
      [a, o] = i.useState([]),
      [r, d] = i.useState(!1),
      [p, h] = i.useState(!1),
      [S, x] = i.useState(!1),
      [C, T] = i.useState(!1),
      [E, A] = i.useState(!1),
      [I, j] = i.useState(!1),
      [w, v] = i.useState(!1),
      [g, b] = i.useState(!1),
      [m, f] = i.useState(!1),
      [u, c] = i.useState(''),
      [y, R] = i.useState(''),
      [G, U] = i.useState(!1),
      [M, se] = i.useState(!1),
      [_, ie] = i.useState(!1),
      [ne, oe] = i.useState(!1),
      [z, ae] = i.useState(),
      [P, re] = i.useState(),
      [ce, le] = i.useState(),
      [de, ue] = i.useState(),
      [me, pe] = i.useState(),
      [ge, fe] = i.useState(),
      [H, J] = i.useState(),
      [he, xe] = i.useState(),
      [k, N] = i.useState(),
      [V, Y] = i.useState(),
      [$, je] = i.useState(!1),
      [_e, Je] = i.useState(),
      [$e, Ge] = i.useState(!1),
      [ze, Ye] = i.useState(),
      [Ke, Xe] = i.useState(!1),
      [Ze, Qe] = i.useState(!1);
    return e.jsx(Ie.Provider, {
      value: {
        todos: n,
        isDateChecked: S,
        setIsDateChecked: x,
        isTimeChecked: C,
        setIsTimeChecked: T,
        isContainerTimeCheck: I,
        setContainerTimeCheck: j,
        isContainerDateCheck: E,
        setContainerDateCheck: A,
        modalOpen: r,
        setModalOpen: d,
        displayTimePicker: g,
        setDisplayTimePicker: b,
        displayDatePicker: m,
        setDisplayDatePicker: f,
        isDateSet: p,
        setIsDateSet: h,
        isTimeSet: w,
        setIsTimeSet: v,
        enteredTodo: u,
        setEnteredTodo: c,
        fireTodo: y,
        setFireTodo: R,
        todosData: a,
        setTodosData: o,
        todoList: Tt,
        selectedDate: G,
        setSelectedDate: U,
        selectedTime: M,
        setSelectedTime: se,
        AddTodosExecuted: ne,
        setAddTodosExecuted: oe,
        completedDateTimeSetting: _,
        setCompletedDateTimeSetting: ie,
        notificationDocId: z,
        setNotificationDocId: ae,
        isSubmitting: P,
        setIsSubmitting: re,
        isDocRef: de,
        setIsDocRef: ue,
        reserveModeTodo: me,
        setReserveModeTodo: pe,
        reserveModeId: ge,
        setReserveModeId: fe,
        todoId: H,
        setTodoId: J,
        todoContent: he,
        setTodoContent: xe,
        Todo: k,
        setTodo: N,
        shouldHandleNotifications: $,
        setShouldHandleNotifications: je,
        isSubmitting2: ce,
        setIsSubmitting2: le,
        agree: _e,
        setAgree: Je,
        isSet: $e,
        setIsSet: Ge,
        docId: ze,
        setDocId: Ye,
        Todo2: V,
        setTodo2: Y,
        completedTask: Ke,
        setCompletedTask: Xe,
        completedTask2: Ze,
        setCompletedTask2: Qe,
      },
      children: e.jsx(Re.Provider, { value: s, children: t }),
    });
  };
Pe.propTypes = { children: l.node.isRequired };
const O = () => i.useContext(Ie),
  te = () => i.useContext(Re),
  Le = i.createContext(),
  Fe = ({ children: t }) => {
    const { todos: n, todoList: s, AddTodosExecuted: a } = O(),
      [o, r] = i.useState(),
      [d, p] = i.useState(!0),
      [h, S] = i.useState([]),
      [x, C] = i.useState(!1),
      [T, E] = i.useState(),
      A = te(),
      I = D.currentUser,
      [j, w] = i.useState(),
      v = i.useRef(null);
    i.useEffect(() => {
      const m = W(D, (f) => {
        f ? w(f.uid) : console.log('No user is signed in');
      });
      return () => m();
    }, []);
    const g = i.useMemo(
        () => ({
          toFirestore: (m) => {
            const f = Object.values(m),
              u = {};
            return (
              f.forEach((c, y) => {
                u[y.toString()] = {
                  title: c.title,
                  description: c.description,
                  type: c.type,
                  id: c.id,
                  content: c.content,
                  editing: c.editing,
                  completed: c.completed,
                  reserve: c.reserve,
                  editingLock: c.editingLock,
                  editingColor: c.editingColor,
                  editingDateTime: c.editingDateTime,
                  notification: c.notification,
                };
              }),
              u
            );
          },
        }),
        []
      ),
      b = i.useMemo(
        () => ({
          fromFirestore: (m) =>
            Object.values(m).map((c) => ({
              title: c.title,
              description: c.description,
              type: c.type,
              id: c.id,
              content: c.content,
              editing: c.editing,
              completed: c.completed,
              reserve: c.reserve,
              editingLock: c.editingLock,
              editingColor: c.editingColor,
              editingDateTime: c.editingDateTime,
              notification: c.notification,
            })),
        }),
        []
      );
    return (
      i.useEffect(() => {
        const m = async () => {
            if (!j) {
              console.log('');
              return;
            }
            try {
              const u = g.toFirestore(n),
                c = { todoId: I.uid, todos: u };
              await X(B(L, 'todoList3', I.uid), c);
            } catch (u) {
              console.error('Error adding todoList to Firestore:', u);
            } finally {
              p(!1);
            }
          },
          f = W(D, (u) => {
            u
              ? m(n, u.uid)
              : console.log('User signed out or not yet logged in');
          });
        return () => f();
      }, [A, n, L, g]),
      i.useEffect(() => {
        const m = async (u) => {
            try {
              const c = B(L, 'todoList3', u),
                y = await nt(c);
              if (y.exists()) {
                const G = y.data().todos || [],
                  U = b.fromFirestore(G);
                r(!0);
                const M = Array.isArray(U) ? U : [U];
                M !== null &&
                  M.length > 0 &&
                  (S(M),
                  r(!0),
                  (v.current = M),
                  A({ type: 'FETCH_TODOS', payload: M || [] }));
              }
            } catch (c) {
              console.error('Error fetching todoList to Firestore:', c);
            } finally {
              p(!1);
            }
          },
          f = W(D, (u) => {
            x ? console.log('User signed out') : m(u.uid);
          });
        return () => f();
      }, [b, A]),
      i.useEffect(() => {
        a &&
          (async () => {
            try {
              const f = g.toFirestore(n),
                u = { todoId: I.uid, todos: f };
              await X(B(L, 'todoList3', I.uid), u);
            } catch (f) {
              console.error('Error adding todoList to Firestore:', f);
            } finally {
              p(!1);
            }
          })();
      }, [a, A, n, b, g]),
      e.jsx(Le.Provider, {
        value: {
          data: o,
          setData: r,
          loading: d,
          setLoading: p,
          fetchedData: h,
          setFetchedData: S,
          todoList: s,
          user: I,
          uid: j,
          firestore: L,
          convertdedNotificationData: T,
          setComvertedNotificationData: E,
          setTodosChanged: C,
        },
        children: t,
      })
    );
  };
Fe.propTypes = { children: l.node.isRequired };
const Ct = () => i.useContext(Le),
  qe = ({
    handleTimeCheckboxChange: t,
    shouldHandleNotifications: n,
    timeCheck: s,
  }) => {
    qe.propTypes = {
      handleTimeCheckboxChange: l.func.isRequired,
      shouldHandleNotifications: l.bool.isRequired,
      timeCheck: l.bool.isRequired,
    };
    const { isTimeChecked: a, setIsTimeChecked: o } = O();
    return (
      (t = () => {
        o(!a);
      }),
      e.jsx(e.Fragment, {
        children: e.jsxs('div', {
          className: 'inner-container',
          children: [
            e.jsx('h4', {
              className: 'time',
              style: {
                color: n && s ? 'rgb(8, 232, 158)' : 'rgb(48, 48, 219)',
              },
              children: 'TIME',
            }),
            e.jsxs('label', {
              className: 'switch2',
              children: [
                e.jsx('input', {
                  className: 'switch-time',
                  type: 'checkbox',
                  checked: a,
                  onChange: t,
                }),
                e.jsx('span', {
                  className: 'slider round',
                  style: { color: n ? 'rgb(8, 232, 158)' : 'rgb(48, 48, 219)' },
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  K = ({
    handleTimeChange: t,
    inputTime: n,
    shouldHandleNotifications: s,
    timeCheck: a,
  }) => {
    K.propTypes = {
      handleTimeChange: l.func.isRequired,
      inputTime: l.string.isRequired,
      shouldHandleNotifications: l.bool,
      timeCheck: l.bool,
    };
    const { setDisplayTimePicker: o, setDisplayDatePicker: r } = O();
    return (
      i.useEffect(() => {
        o(!0), r(!1);
      }, [o, r]),
      e.jsxs('div', {
        className: 'time-picker-container',
        style: {
          border: s && a ? '1px solid rgb(8, 232, 158)' : '1px solid #ccc',
          padding: '8px',
          borderRadius: '4px',
        },
        children: [
          e.jsx('h2', {
            style: { color: s && a ? 'rgb(8, 232, 158)' : 'rgb(48, 48, 219)' },
            children: 'Time Picker',
          }),
          e.jsx('input', {
            className: 'MyTimePicker',
            onChange: t,
            selected: n,
            label: 'MyTimePicker',
            type: 'time',
            value: n,
            style: {
              width: '160px',
              padding: '6px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '16px',
            },
          }),
          e.jsxs('p', {
            style: { color: s && a ? 'rgb(8, 232, 158)' : ' rgb(48, 48, 219)' },
            children: ['Selected time: ', n],
          }),
        ],
      })
    );
  },
  ee = ({
    isDate: t,
    handleDateChange: n,
    shouldHandleNotifications: s,
    timeCheck: a,
  }) => {
    ee.propTypes = {
      isDate: l.instanceOf(Date).isRequired,
      handleDateChange: l.func.isRequired,
      shouldHandleNotifications: l.bool,
      timeCheck: l.bool,
    };
    const {
      selectedDate: o,
      setDisplayDatePicker: r,
      setDisplayTimePicker: d,
    } = O();
    return (
      i.useEffect(() => {
        r(!0), d(!1);
      }, [d, r]),
      e.jsxs('div', {
        className: 'date-picker-container',
        style: {
          border: s && a ? '1px solid rgb(8, 232, 158)' : '1px solid #ccc',
          padding: '8px',
          borderRadius: '4px',
        },
        children: [
          e.jsx('h2', {
            style: { color: s && a ? 'rgb(8, 232, 158)' : 'rgb(48, 48, 219)' },
            children: 'Date Picker',
          }),
          e.jsx(ft, {
            className: 'DateTimePicker custom',
            label: 'DateTimePicker',
            inputVariant: 'outlined',
            onChange: n,
            selected: t,
            showTodayButton: !0,
            ampm: !1,
            autoOk: !0,
          }),
          o &&
            t &&
            e.jsxs('p', {
              style: {
                color: s && a ? 'rgb(8, 232, 158)' : ' rgb(48, 48, 219)',
              },
              children: ['Selected Date: ', t.toLocaleDateString()],
            }),
        ],
      })
    );
  },
  Oe = ({
    handleDateCheckboxChange: t,
    shouldHandleNotifications: n,
    timeCheck: s,
  }) => {
    Oe.propTypes = {
      handleDateCheckboxChange: l.func.isRequired,
      shouldHandleNotifications: l.bool.isRequired,
      timeCheck: l.bool.isRequired,
    };
    const { isDateChecked: a, setIsDateChecked: o } = O();
    return (
      (t = () => {
        o(!a);
      }),
      e.jsx(e.Fragment, {
        children: e.jsxs('div', {
          className: 'inner-container',
          children: [
            e.jsx('h4', {
              style: {
                color: n && s ? 'rgb(8, 232, 158)' : 'rgb(48, 48, 219)',
              },
              children: 'DATE',
            }),
            e.jsxs('label', {
              className: 'switch',
              children: [
                e.jsx('input', {
                  className: 'switch-date',
                  type: 'checkbox',
                  checked: a,
                  onChange: t,
                }),
                e.jsx('span', { className: 'slider round' }),
              ],
            }),
          ],
        }),
      })
    );
  };
ke().length || Se(Ee);
const Ue = ({
    shouldHandleNotifications: t = !1,
    completedDateTimeSetting: n = !1,
    todo: s = {},
  }) => {
    Ue.propTypes = {
      todo: l.shape({
        id: l.number,
        content: l.string,
        editing: l.bool,
        editingColor: l.bool,
        completed: l.bool,
        editingDateTime: l.bool,
        editingLock: l.bool,
        docId: l.string,
      }).isRequired,
      children: l.node,
      shouldHandleNotifications: l.bool,
      completedDateTimeSetting: l.bool,
    };
    const {
      docId: a,
      Todo2: o,
      setTodo2: r,
      completedTask: d,
      completedTask2: p,
      setCompletedTask2: h,
    } = O();
    localStorage.clear();
    const [S, x] = i.useState(),
      [C, T] = i.useState(null),
      [E, A] = i.useState(!1);
    W(D, (j) => {
      j && j.getIdToken(!0);
    }),
      i.useEffect(() => {
        const j = W(D, (w) => {
          if (w) {
            const v = D.currentUser;
            T(v), x(w.uid), r(s), A(!0);
          }
        });
        return () => j();
      }, []);
    const I = async () => {
      await Ce(B(L, 'notifications', a), { isNotified: !0 });
    };
    return (
      i.useEffect(() => {
        const j = async () => {
          await Ce(B(L, 'notifications', a), { docId: a });
        };
        return () => j();
      }, [n, t]),
      i.useEffect(() => {
        if (E) {
          const j = W(D, (w) => {
            w &&
              (async () => {
                const g = ot(L, 'notifications'),
                  b = ye(
                    g,
                    Q('todoId', '==', S),
                    Q('isNotified', '==', !1),
                    Q('notificationTime', '>=', Te.now()),
                    Z('notificationTime'),
                    Z('__name__')
                  ),
                  u = (await ve(b)).docs
                    .map((y) => {
                      var R;
                      return {
                        ...y.data(),
                        id: y.id,
                        notificationTime:
                          (R = y.data().notificationTime) == null
                            ? void 0
                            : R.toDate(),
                        isNotified: y.data().isNotified,
                      };
                    })
                    .filter((y) => !y.isNotified);
                (() => {
                  const y = localStorage.getItem('tasks') || [];
                  u.forEach((R) => {
                    y.some((U) => U.id === R.id) ||
                      (y.push(R),
                      localStorage.setItem('tasks', JSON.stringify(y)));
                  });
                })();
              })();
          });
          return () => j();
        }
      }, [E, o, p, n, t]),
      i.useEffect(() => {
        (async () => {
          var b;
          const w = Ne(L, 'notifications'),
            v = ye(
              w,
              Q('notificationTime', '<', Te.now()),
              Z('notificationTime'),
              Z('__name__')
            ),
            g = await ve(v);
          for (const m of g.docs) {
            const f = m.id,
              c = (b = m.data().notificationTime) == null ? void 0 : b.toDate(),
              y = new Date().getTime(),
              R = new Date(c).getTime() + 24 * 60 * 60 * 1e3;
            (c > y || d) && (I(), h(!0)),
              R >= y && (await at(B(L, 'notifications', f)));
          }
        })();
      }, [n, t, o, d]),
      null
    );
  },
  Me = ({ todo: t }) => {
    Me.propTypes = {
      todo: l.shape({
        id: l.number,
        content: l.string,
        editing: l.bool,
        editingColor: l.bool,
        completed: l.bool,
        editingDateTime: l.bool,
        editingLock: l.bool,
      }).isRequired,
      children: l.node,
    };
    const n = te(),
      [s, a] = i.useState(new Date()),
      [o, r] = i.useState(new Date()),
      [d, p] = i.useState(''),
      [h, S] = i.useState(s),
      [x, C] = i.useState(o),
      [T, E] = i.useState(!1),
      [A, I] = i.useState(!0),
      [j, w] = i.useState(),
      {
        isDateChecked: v,
        isTimeChecked: g,
        setIsDateChecked: b,
        setIsTimeChecked: m,
        isContainerDateCheck: f,
        setContainerDateCheck: u,
        isContainerTimeCheck: c,
        setContainerTimeCheck: y,
        modalOpen: R,
        setIsTimeSet: G,
        setIsDateSet: U,
        setSelectedDate: M,
        setSelectedTime: se,
        completedDateTimeSetting: _,
        setCompletedDateTimeSetting: ie,
        setNotificationDocId: ne,
        isSubmitting: oe,
        setIsSubmitting: z,
        setIsDocRef: ae,
        shouldHandleNotifications: P,
        setShouldHandleNotifications: re,
        setDocId: ce,
        Todo2: le,
        setTodo2: de,
      } = O();
    i.useEffect(() => {
      const k = W(D, (N) => {
        N && w(N.uid);
      });
      return () => k();
    }, []),
      i.useEffect(() => {
        'Notification' in window || I(!1);
      }, []);
    const ue = () => {
        if (!A)
          return e.jsx('div', {
            className: 'warning-message',
            children: e.jsx('p', {
              className: 'warning',
              children: 'This browser does not supported notifications',
            }),
          });
      },
      me = (k) => {
        b(!k);
      },
      pe = (k) => {
        m(!k);
      },
      ge = (k) => {
        u(!0), y(!1), M(!0);
      },
      fe = (k) => {
        y(!0), u(!1), se(!0);
      },
      H = (k) => {
        const N = new Date(k.target.value);
        a(N), U(!0);
      },
      J = (k) => {
        const { value: N } = k.target,
          [V, Y] = N.split(':'),
          $ = new Date();
        $.setHours(parseInt(V), parseInt(Y), 0, 0), r($), p(N), G(!0), E(!0);
      },
      he = async (k) => {
        if (!oe) {
          if ((z(!0), s && o && T && k.content && k.id)) {
            const N = new Date(s);
            N.setHours(o.getHours(), o.getMinutes(), 0, 0);
            try {
              const V = ht();
              ce(V);
              const Y = {
                  title: 'Reminder',
                  description:
                    'Time is approaching, receive to push notification..',
                  type: 'string',
                  notificationTime: N,
                  todoId: j,
                  content: k.content,
                  id: k.id,
                  isNotified: !1,
                  docId: 'xxx',
                },
                $ = B(Ne(L, 'notifications'), V);
              await X($, Y);
              const je = { ...k, notification: !0 };
              n({ type: 'todo/notification', todo: je }),
                ne(j),
                ae($),
                ie(!0),
                re(!0),
                de(k);
            } catch (V) {
              console.error(
                'Error writing notification data to Firestore: ',
                V
              );
            } finally {
              z(!1);
            }
          } else z(!1);
          try {
            const N = await Notification.requestPermission();
            if (N === 'granted') return;
            console.warn(
              N === 'denied'
                ? 'Notification permission denied'
                : 'Notification permission dismissed'
            );
          } catch (N) {
            console.error('Failed to request permission:', N);
          }
        }
      };
    i.useEffect(() => {
      const k = document.querySelector('.modal');
      (k.style.alignItems = 'center'),
        (s !== h || o !== x) && (s !== h || o !== x) && (S(s), C(o));
    }, [s, o]);
    const xe = () => {
      if (P)
        return e.jsx('div', {
          className: 'successful',
          children: e.jsx('h3', {
            className: 'set-message',
            children: 'Completed Setting',
          }),
        });
    };
    return R
      ? e.jsxs(
          'div',
          {
            className: 'modal',
            style: {
              backgroundColor:
                P && _ && T ? 'transparent' : 'rgba(40, 147, 247, 0.772)',
              border:
                P && _ && T
                  ? '1px solid rgb(8, 232, 158)'
                  : '1px solid rgb(48, 48, 219)',
            },
            children: [
              ue(),
              e.jsx('div', {
                className: 'switch-container',
                onClick: () => ge(),
                children: e.jsx(Oe, {
                  handleDateCheckboxChange: me,
                  isChecked: v,
                  shouldHandleNotifications: P,
                  inputTime: d,
                  timeCheck: T,
                }),
              }),
              e.jsx('div', {
                className: 'switch-container2',
                onClick: () => fe(),
                children: e.jsx(qe, {
                  handleTimeCheckboxChange: pe,
                  isChecked: g,
                  shouldHandleNotifications: P,
                  inputTime: d,
                  timeCheck: T,
                }),
              }),
              v && g && c
                ? e.jsx(K, {
                    className: 'MyTimePicker',
                    onChange: J,
                    selected: o,
                    label: 'MyTimePicker',
                    inputVariant: 'outlined',
                    showTodayButton: !0,
                    ampm: !1,
                    autoOk: !0,
                    isTime: o,
                    inputTime: d,
                    setInputTime: p,
                    handleTimeChange: J,
                    shouldHandleNotifications: P,
                    timeCheck: T,
                  })
                : v && g && f
                  ? e.jsx(ee, {
                      onChange: H,
                      selected: s,
                      isDate: s,
                      inputVariant: 'outlined',
                      handleDateChange: H,
                      shouldHandleNotifications: P,
                      inputTime: d,
                      timeCheck: T,
                    })
                  : v && g
                    ? e.jsx(K, {
                        isTime: o,
                        handleTimeChange: J,
                        inputTime: d,
                        setInputTime: p,
                        inputVariant: 'outlined',
                        showTodayButton: !0,
                        ampm: !1,
                        autoOk: !0,
                      })
                    : v
                      ? e.jsx(ee, {
                          onChange: H,
                          selected: s,
                          isDate: s,
                          handleDateChange: H,
                        })
                      : g
                        ? e.jsx(K, {
                            isTime: o,
                            handleTimeChange: J,
                            inputTime: d,
                            inputVariant: 'outlined',
                            showTodayButton: !0,
                            ampm: !1,
                            autoOk: !0,
                            setInputTime: p,
                          })
                        : f
                          ? e.jsx(ee, {
                              onChange: H,
                              selected: s,
                              isDate: s,
                              inputVariant: 'outlined',
                              handleDateChange: H,
                            })
                          : c
                            ? e.jsx(K, {
                                isTime: o,
                                handleTimeChange: J,
                                inputTime: d,
                                inputVariant: 'outlined',
                                showTodayButton: !0,
                                ampm: !1,
                                autoOk: !0,
                                setInputTime: p,
                              })
                            : e.jsx(e.Fragment, {
                                children: e.jsxs('div', {
                                  className: 'message-container',
                                  style: {
                                    backgroundColor:
                                      !f && !c && P && _ && T
                                        ? 'rgb(8, 232, 158)'
                                        : 'rgb(48, 48, 219)',
                                  },
                                  children: [
                                    e.jsx('h2', {
                                      className: 'message',
                                      children: 'Please Select',
                                    }),
                                    e.jsx('h2', {
                                      className: 'message',
                                      children: ' Setting',
                                    }),
                                    e.jsx('h2', {
                                      className: 'message',
                                      children: ' Date & Time',
                                    }),
                                  ],
                                }),
                              }),
              e.jsxs('div', {
                className: 'btn-container',
                children: [
                  e.jsx('button', {
                    className: 'set-btn',
                    onClick: () => he(t),
                    style: {
                      color:
                        P && T
                          ? 'rgb(8, 232, 158)'
                          : 'rgb(40, 147, 247, 0.772)',
                    },
                    children: P ? 'DONE' : 'SET',
                  }),
                  _ &&
                    P &&
                    e.jsx(Ue, {
                      shouldHandleNotifications: P,
                      completedDateTimeSetting: _,
                      todo: le,
                    }),
                ],
              }),
              xe(),
            ],
          },
          t.id
        )
      : null;
  },
  Be = ({ todo: t }) => {
    Be.propTypes = {
      todo: l.shape({
        id: l.number.isRequired,
        content: l.string.isRequired,
        editing: l.bool.isRequired,
        editingColor: l.bool,
        completed: l.bool,
        editingDateTime: l.bool,
        editingLock: l.bool,
      }).isRequired,
      children: l.node,
    };
    const {
        setModalOpen: n,
        setReserveModeTodo: s,
        setReserveModeId: a,
        setIsDateChecked: o,
        setIsTimeChecked: r,
        setContainerDateCheck: d,
        setContainerTimeCheck: p,
        modalOpen: h,
        Todo: S,
        setTodo: x,
        setShouldHandleNotifications: C,
        isSet: T,
        setCompletedTask: E,
      } = O(),
      [A, I] = i.useState(t.content),
      j = te(),
      w = (u) => {
        I(u.target.value);
      },
      v = () => {
        const u = { ...t, editing: !t.editing };
        j({ type: 'todo/update', todo: u });
      },
      g = (u) => {
        u.preventDefault();
        const c = { ...t, editing: !t.editing, content: A };
        j({ type: 'todo/update', todo: c });
      },
      b = (u) => {
        j({ type: 'todo/delete', todo: u }), E(!0);
      },
      m = (u) => {
        const c = { ...u, completed: !0 };
        j({ type: 'complete2', todo: c }), E(!0);
      },
      f = (u) => {
        const c = !u.editingColor,
          y = {
            ...u,
            editingDateTime: !0,
            editingColor: c,
            editingLock: !0,
            id: u.id,
            content: u.content,
          };
        j({ type: 'todo/reserve', todo: y }),
          j({ type: 'todo/reserveColor', todo: y }),
          j({ type: 'todo/editingDateTime', todo: y }),
          n((R) => !R),
          s(u),
          a(u.id),
          x(u),
          !h && o(!1),
          !h && r(!1),
          !h && d(!1),
          !h && p(!1),
          !h && C(!1);
      };
    return e.jsxs(
      'div',
      {
        className: 'modalParent',
        children: [
          e.jsx('span', {
            className: 'circleI',
            onClick: () => f(t),
            style: {
              color:
                T && t.editingColor && t.editingDateTime && t.editingLock
                  ? 'yellow'
                  : 'grey',
            },
            children: 'i',
          }),
          e.jsx('button', {
            className: 'compBtn',
            onClick: () => m(t),
            onDoubleClick: () => b(t),
            style: { color: t.completed ? 'rgb(8, 232, 158)' : 'none' },
            children: t.completed ? 'Completed' : 'Complete',
          }),
          e.jsx('form', {
            onSubmit: g,
            style: { display: 'inline' },
            children: t.editing
              ? e.jsx('input', { type: 'text', value: A, onChange: w })
              : e.jsx('span', {
                  className: 'content',
                  onDoubleClick: v,
                  style: {
                    textDecoration: t.completed ? 'line-through' : 'none',
                    color: t.completed ? 'rgb(8, 232, 158)' : 'none',
                  },
                  children: t.content,
                }),
          }),
          h && t.id == S.id
            ? e.jsx(
                'div',
                {
                  className: 'modal-container',
                  children: e.jsx(Me, { todo: S }),
                },
                t.id
              )
            : null,
        ],
      },
      t.id
    );
  },
  bt = () => {
    const { todos: t } = O(),
      { data: n, loading: s } = Ct();
    return e.jsx(e.Fragment, {
      children: s
        ? e.jsx('div', { children: 'Loading...' })
        : e.jsx('div', {
            children:
              Array.isArray(t) &&
              t.length > 0 &&
              n &&
              t &&
              t.map((a) => (a && a.id ? e.jsx(Be, { todo: a }, a.id) : null)),
          }),
    });
  },
  kt = () => {
    const t = te(),
      { enteredTodo: n, setEnteredTodo: s, setAddTodosExecuted: a } = O(),
      o = () => {
        const d = {
          title: n,
          description: n,
          type: 'string',
          id: Math.floor(Math.random() * 1e5),
          content: n,
          editing: !1,
          completed: !1,
          reserve: !1,
          editingLock: !1,
          editingColor: !1,
          editingDateTime: !1,
          notification: !1,
        };
        t({ type: 'todo/add', todo: d, editing: !1 }), s(''), a(!0);
      },
      r = () => {
        t({ type: 'todo/reset', todo: [] });
      };
    return e.jsxs('div', {
      children: [
        e.jsx('input', {
          type: 'text',
          value: n,
          id: 'task',
          name: 'task',
          onChange: (d) => {
            s(d.target.value);
          },
        }),
        e.jsxs('div', {
          className: 'flex-box',
          children: [
            e.jsx('button', {
              className: 'add',
              onClick: () => o(),
              children: e.jsxs('div', {
                className: 'plus',
                children: [
                  e.jsx('span', { className: 'gif1' }),
                  e.jsx('span', { className: 'gif2' }),
                ],
              }),
            }),
            e.jsx('button', {
              className: 'reset2',
              onClick: () => r(),
              children: e.jsx('div', {
                className: 'reset',
                children: e.jsx('img', {
                  src: '/icon_007476_32.png',
                  alt: 'reset',
                }),
              }),
            }),
          ],
        }),
      ],
    });
  },
  St = () => e.jsxs(e.Fragment, { children: [e.jsx(bt, {}), e.jsx(kt, {})] }),
  Nt = () => {
    const { modalOpen: t, timeCheck: n } = O(),
      s = [1, 2, 3, 4, 5],
      a = () =>
        n && t
          ? 'rgb(8, 232, 158)'
          : t
            ? 'rgba(40, 147, 247, 0.772)'
            : 'rgb(8, 232, 158)';
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx('div', { className: 'triangle' }),
        e.jsx('div', {
          className: 'decoration',
          children: s.map((o, r) =>
            e.jsx(
              'span',
              { className: 'slash', style: { backgroundColor: a() } },
              r
            )
          ),
        }),
        e.jsx('div', {
          className: 'container',
          children: e.jsxs('section', {
            children: [
              e.jsx('div', {
                className: 'big-title',
                children: e.jsx('h1', {
                  className: 'big-text',
                  style: {
                    color:
                      n && t
                        ? 'rgb(8, 232, 158)'
                        : t
                          ? 'rgba(40, 147, 247, 0.772)'
                          : 'rgb(8, 232, 158)',
                  },
                  children: 'REMINDER',
                }),
              }),
              e.jsx('div', {
                className: 'clone-big-title',
                children: e.jsx('h1', {
                  className: 'clone-text',
                  children: 'REMINDER',
                }),
              }),
              e.jsx('div', {
                className: 'discription',
                children: e.jsx('p', {
                  children:
                    "Manage your tasks and make your lifestyle meaningful with the Reminder App. Let's get started. You can input your requirements and add them by pressing the plus button. Once your tasks are successfully executed and completed, press the complete button. You can delete a task by double-clicking it. Once all tasks are completed, you can clear them using the refresh button. Be careful, as pressing the refresh button is irreversible. Have a great lifestyle!",
                }),
              }),
              e.jsxs('div', {
                className: 'out-line',
                children: [
                  e.jsx('h2', { className: 'title', children: 'Reminder' }),
                  e.jsx(St, {}),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  Dt = () => {
    const t = F(),
      n = () => {
        t('/UserAuth');
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx('span', {
          className: 'back',
          onClick: n,
          children: 'Back to Auth',
        }),
        e.jsx(Fe, { children: e.jsx(Nt, {}) }),
      ],
    });
  },
  He = () =>
    e.jsx(e.Fragment, { children: e.jsx(Pe, { children: e.jsx(Dt, {}) }) });
function Ve() {
  return new Promise((t) => {
    const n = W(D, (s) => {
      t(!!s), n();
    });
  });
}
function wt({ children: t }) {
  const n = F();
  return (
    i.useEffect(() => {
      Ve().then((s) => {
        s || n('/UserAuth');
      });
    }, [n]),
    t
  );
}
const We = () => {
  const t = F();
  let n = 5,
    s = [];
  for (let T = 0; T < n; T++) s.push(T);
  const [a, o] = i.useState(!1),
    r = () => '#fff',
    d = () => {
      t('/SignUp');
    },
    p = () => {
      t('/SignIn');
    },
    h = () => {
      De(D)
        .then(() => {
          o(!0), localStorage.clear();
        })
        .catch((T) => {
          console.error('ログアウトエラー:', T);
        });
    },
    S = () => {
      if (a)
        return e.jsx('div', {
          className: 'sign-out2',
          children: e.jsx('h3', { children: 'Signed Out successfully' }),
        });
      setTimeout(() => o(!1), 5e3);
    },
    x = () => {
      t('/EasyLogin');
    },
    C = () => {
      t('/DeleteAccount');
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx('div', {
        className: 'decoration',
        children: s.map((T, E) =>
          e.jsx(
            'span',
            { className: 'slash', style: { backgroundColor: r() } },
            E
          )
        ),
      }),
      e.jsxs('div', {
        className: 'container',
        children: [
          e.jsx('img', { className: 'logo', src: '/logo_transparent.png' }),
          e.jsx('div', { className: 'decoration-container' }),
          e.jsx('div', {
            className: 'circle2',
            children: e.jsxs('div', {
              className: 'inner9-container',
              children: [
                e.jsx('span', {
                  id: 'SU',
                  className: 'select-auth sign-up',
                  onClick: () => d(),
                  children: 'Sign Up',
                }),
                e.jsx('span', {
                  id: 'SI',
                  className: 'select-auth sign-in',
                  onClick: () => p(),
                  children: 'Sign In',
                }),
                e.jsx('span', {
                  id: 'SO',
                  className: 'select-auth sign-out',
                  onClick: () => h(),
                  children: 'Sign Out',
                }),
                e.jsx('span', {
                  className: 'select-auth easy-login',
                  onClick: () => x(),
                  children: 'お試しログイン',
                }),
                e.jsx('span', {
                  id: 'DA',
                  className: 'select-auth delete-account',
                  onClick: () => C(),
                  children: 'Delete Account',
                }),
              ],
            }),
          }),
          S(),
        ],
      }),
    ],
  });
};
function Et() {
  const t = F(),
    [n, s] = i.useState(!1);
  return (
    i.useEffect(() => {
      Ve().then((a) => {
        a ? s(!0) : t('/UserAuth');
      });
    }, [t]),
    e.jsx(e.Fragment, {
      children: e.jsx('div', {
        children: e.jsx(wt, { children: n ? e.jsx(He, {}) : e.jsx(We, {}) }),
      }),
    })
  );
}
function At() {
  const t = F();
  i.useEffect(() => {
    (async () => {
      await De(D), setTimeout(() => t('/UserAuth'), 1e4);
    })(),
      localStorage.clear();
  }, [t]);
}
const It = [
  {
    title: 'Make a restaurant reservation',
    description: 'user tasks',
    type: 'string',
    id: 1,
    content: 'Make a restaurant reservation',
    editing: !1,
    completed: !1,
    reserve: !1,
    editingLock: !1,
    editingColor: !1,
    editingDateTime: !1,
    notification: !1,
  },
  {
    title: 'send a letter',
    description: 'user tasks',
    type: 'string',
    id: 2,
    content: 'send a letter',
    editing: !1,
    completed: !1,
    reserve: !1,
    editingLock: !1,
    editingColor: !1,
    editingDateTime: !1,
    notification: !1,
  },
  {
    title: 'buy flowers',
    description: 'user tasks',
    type: 'string',
    id: 3,
    content: 'buy flowers',
    editing: !1,
    completed: !1,
    reserve: !1,
    editingLock: !1,
    editingColor: !1,
    editingDateTime: !1,
    notification: !1,
  },
];
function Rt() {
  const [t, n] = i.useState(!1),
    s = i.useMemo(
      () => ({
        toFirestore: (v) => {
          const g = Object.values(v),
            b = {};
          return (
            g.forEach((m, f) => {
              b[f.toString()] = {
                title: m.title,
                description: m.description,
                type: m.type,
                id: m.id,
                content: m.content,
                editing: m.editing,
                completed: m.completed,
                reserve: m.reserve,
                editingLock: m.editingLock,
                editingColor: m.editingColor,
                editingDateTime: m.editingDateTime,
                notification: m.notification,
              };
            }),
            b
          );
        },
      }),
      []
    ),
    [a, o] = i.useState({ name: '', email: '', password: '' }),
    { name: r, email: d, password: p } = a,
    h = F(),
    S = [1, 2, 3, 4, 5],
    x = () => 'rgba(40, 147, 247, 0.772)',
    C = (v) => {
      o({ ...a, [v.target.id]: v.target.value });
    },
    T = () => {
      n(!0);
    },
    E = () => {
      h('/Terms');
    },
    A = () => {
      h('/Terms2');
    },
    I = () => {
      h('/PrivacyPolicy');
    },
    j = () => {
      h('/UserAuth');
    },
    w = async (v) => {
      v.preventDefault();
      try {
        if (p.length < 6)
          throw new Error('Password must be at least 6 characters long.');
        if (t) {
          const b = (await rt(D, d, p)).user;
          await ct(b, { displayName: r });
          const m = s.toFirestore(It),
            f = { todoId: b.uid, agreement: t, todos: m };
          await X(B(L, 'todoList3', b.uid), f),
            await X(B(L, 'notifications', b.uid), {}),
            h('/Example');
        } else
          return e.jsx('div', {
            children: e.jsx('h2', {
              children: 'Agreement Required 利用規約に同意が必要です。',
            }),
          });
      } catch (g) {
        alert(g.message),
          g.code === 'auth/email-already-in-use'
            ? alert(
                'This email is already in use. Please use a different email.'
              )
            : (console.error('Error signing up:', g.message), alert(g.message));
      }
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx('div', { className: 'triangle' }),
      e.jsx('div', {
        className: 'decoration',
        children: S.map((v, g) =>
          e.jsx(
            'span',
            { className: 'slash', style: { backgroundColor: x() } },
            g
          )
        ),
      }),
      e.jsx('span', {
        className: 'back',
        onClick: j,
        children: 'Back To Auth',
      }),
      e.jsx('div', {
        className: 'auth-container',
        children: e.jsx('div', {
          className: 'outline-container',
          children: e.jsxs('form', {
            onSubmit: w,
            children: [
              e.jsx('input', {
                type: 'text',
                placeholder: 'Name',
                id: 'name',
                value: r,
                required: !0,
                onChange: C,
                className: 'form-input',
                autoComplete: 'name',
              }),
              e.jsx('input', {
                type: 'email',
                placeholder: 'Email',
                id: 'email',
                value: d,
                required: !0,
                onChange: C,
                className: 'form-input',
                autoComplete: 'email',
              }),
              e.jsx('input', {
                type: 'password',
                placeholder: 'Password',
                id: 'password',
                value: p,
                required: !0,
                onChange: C,
                className: 'form-input',
                autoComplete: 'current-password',
              }),
              e.jsxs('ul', {
                className: 'agreement-resource',
                children: [
                  e.jsx('li', {
                    className: 'terms',
                    onClick: () => E(),
                    children: 'Terms of Service Japanese',
                  }),
                  e.jsx('li', {
                    className: 'terms2',
                    onClick: () => A(),
                    children: 'Terms of Service English',
                  }),
                  e.jsx('li', {
                    className: 'policy',
                    onClick: () => I(),
                    children: 'PrivacyPolicy',
                  }),
                  e.jsx('p', {
                    className: 'request',
                    children: 'Request Agreement for Terms of Service',
                  }),
                ],
              }),
              e.jsxs('div', {
                className: 'inner-container2',
                children: [
                  e.jsx('input', {
                    type: 'checkbox',
                    className: 'agree-check',
                    onClick: () => T(),
                  }),
                  e.jsx('div', {
                    className: 'agree-container',
                    children: e.jsx('span', {
                      className: 'important',
                      style: {
                        color: t
                          ? 'rgb(8, 232, 158)'
                          : 'rgba(40, 147, 247, 0.772)',
                      },
                      children: t ? 'Agreed' : 'Agree',
                    }),
                  }),
                ],
              }),
              e.jsx('button', {
                type: 'submit',
                className: 'form-button',
                children: 'Submit',
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function Pt() {
  const [t, n] = i.useState({ email: '', password: '' }),
    { email: s, password: a } = t,
    o = F(),
    r = (x) => {
      n({ ...t, [x.target.id]: x.target.value });
    },
    d = async (x) => {
      x.preventDefault();
      try {
        (await we(D, s, a)) && o('/Example');
      } catch (C) {
        console.log(C);
      }
    },
    p = () => 'rgba(40, 147, 247, 0.772)',
    h = [1, 2, 3, 4, 5],
    S = () => {
      o('/UserAuth');
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx('div', {
        className: 'decoration',
        children: h.map((x, C) =>
          e.jsx(
            'span',
            { className: 'slash2', style: { backgroundColor: p() } },
            C
          )
        ),
      }),
      e.jsx('span', {
        className: 'back',
        onClick: S,
        children: 'Back To Auth',
      }),
      e.jsx('div', {
        className: 'auth-container',
        children: e.jsx('div', {
          className: 'outline-container',
          children: e.jsxs('form', {
            onSubmit: d,
            children: [
              e.jsx('input', {
                type: 'email',
                placeholder: 'Email',
                id: 'email',
                value: s,
                required: !0,
                onChange: r,
                className: 'form-input',
                autoComplete: 'email',
              }),
              e.jsx('input', {
                type: 'password',
                placeholder: 'Password',
                id: 'password',
                value: a,
                required: !0,
                onChange: r,
                className: 'form-input',
                autoComplete: 'current-password',
              }),
              e.jsx('button', {
                type: 'submit',
                className: 'form-button',
                children: 'Submit',
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
const be = { email: 'Peace.875136D.time@gmail.com', password: void 0 },
  Lt = () => {
    const t = F(),
      n = async () => {
        (await we(D, be.email, be.password)) && t('/Example');
      };
    return (
      i.useEffect(() => {
        n();
      }, []),
      e.jsx('div', {
        className: 'login-container',
        children: e.jsx('div', {
          className: 'logging-in',
          children: 'Logging in...',
        }),
      })
    );
  },
  Ft = () => {
    const [t, n] = i.useState(!1),
      [s, a] = i.useState(''),
      [o, r] = i.useState(''),
      d = D.currentUser,
      p = F(),
      h = async (x) => {
        if ((x.preventDefault(), d))
          try {
            const C = lt.credential(d.email, s);
            await dt(d, C), await S();
          } catch (C) {
            r(`再認証中にエラーが発生しました: ${C.message}`);
          }
      },
      S = async () => {
        if (d)
          try {
            await d.delete(),
              r('ユーザーアカウントが削除されました'),
              setTimeout(() => p('/UserAuth'), 3e3);
          } catch (x) {
            x.code === 'auth/requires-recent-login'
              ? n(!0)
              : (r(`アカウント削除中にエラーが発生しました: ${x.message}`),
                setTimeout(() => p('/UserAuth', 1e4)));
          }
        else
          r('サインインしているユーザーがいません'),
            setTimeout(() => p('/UserAuth'), 1e4);
      };
    return (
      i.useEffect(() => {
        t || S();
      }, [t]),
      e.jsx('div', {
        children: t
          ? e.jsx('div', {
              className: 'auth-container',
              children: e.jsxs('div', {
                className: 'outline-container',
                children: [
                  e.jsx('h2', { children: '再認証' }),
                  e.jsxs('form', {
                    onSubmit: h,
                    children: [
                      e.jsx('div', {
                        children: e.jsxs('label', {
                          children: [
                            'Password:',
                            e.jsx('input', {
                              className: 'form-input',
                              type: 'password',
                              value: s,
                              onChange: (x) => a(x.target.value),
                              required: !0,
                            }),
                          ],
                        }),
                      }),
                      e.jsx('button', {
                        className: 'form-button',
                        type: 'submit',
                        children: 'Reauth',
                      }),
                    ],
                  }),
                  e.jsx('p', { children: o }),
                ],
              }),
            })
          : e.jsx('div', {
              className: 'auth-container',
              children: e.jsxs('div', {
                className: 'outline-container',
                children: [
                  e.jsx('h2', { children: 'アカウント削除中...' }),
                  e.jsx('p', { className: 'message', children: o }),
                ],
              }),
            }),
      })
    );
  },
  qt = () => {
    const t = F();
    return (
      i.useEffect(() => {
        (async () => {
          try {
            (await ut(D)) && t('/userAuth');
          } catch (s) {
            console.error('Error during authentication redirect:', s);
          }
        })();
      }, [t]),
      e.jsx('div', { children: e.jsx('p', { children: 'Redirecting...' }) })
    );
  },
  Ot = () => {
    const t = F(),
      n = () => {
        t('/SignUp');
      };
    return e.jsxs('div', {
      className: 'container',
      children: [
        e.jsx('a', {
          href: 'https://www.privacypolicies.com/live/d955508c-375b-408d-8206-18852254e629',
          children: 'PrivacyPolicy',
        }),
        e.jsx('nav', { onClick: () => n(), children: 'Back to Sign Up' }),
      ],
    });
  },
  Ut = () => {
    const t = F(),
      n = () => {
        t('/SignUp');
      };
    return e.jsxs('div', {
      className: 'container',
      children: [
        e.jsx('embed', {
          src: '/VN3Licence-Ja.pdf',
          type: 'application/pdf',
          width: '100%',
          height: '1000px',
        }),
        e.jsx('nav', { onClick: () => n(), children: 'Back to Sign Up' }),
      ],
    });
  },
  Mt = () => {
    const t = F(),
      n = () => {
        t('/SignUp');
      };
    return e.jsxs('div', {
      className: 'container',
      children: [
        e.jsx('embed', {
          src: '/VN3Licence-En.pdf',
          type: 'application/pdf',
          width: '100%',
          height: '1000px',
        }),
        e.jsx('nav', { onClick: () => n(), children: 'Back to Sign Up' }),
      ],
    });
  };
function Bt() {
  return e.jsx('div', {
    className: 'App',
    children: e.jsx(gt, {
      future: { v7_startTransition: !0, v7_relativeSplatPath: !0 },
      children: e.jsxs(xt, {
        children: [
          e.jsx(q, { path: '/', element: e.jsx(Et, {}) }),
          e.jsx(q, { path: '/AuthRedirect', element: e.jsx(qt, {}) }),
          e.jsx(q, { path: '/Example', element: e.jsx(He, {}) }),
          e.jsx(q, { path: '/UserAuth', element: e.jsx(We, {}) }),
          e.jsx(q, { path: '/SignOut', element: e.jsx(At, {}) }),
          e.jsx(q, { path: '/SignUp', element: e.jsx(Rt, {}) }),
          e.jsx(q, { path: '/SignIn', element: e.jsx(Pt, {}) }),
          e.jsx(q, { path: '/EasyLogin', element: e.jsx(Lt, {}) }),
          e.jsx(q, { path: '/DeleteAccount', element: e.jsx(Ft, {}) }),
          e.jsx(q, { path: '/PrivacyPolicy', element: e.jsx(Ot, {}) }),
          e.jsx(q, { path: '/Terms', element: e.jsx(Ut, {}) }),
          e.jsx(q, { path: '/Terms2', element: e.jsx(Mt, {}) }),
        ],
      }),
    }),
  });
}
const Ht = mt(document.getElementById('root'));
Ht.render(e.jsx(pt.StrictMode, { children: e.jsx(Bt, {}) }));
