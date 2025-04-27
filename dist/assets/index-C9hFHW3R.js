import {
  g as Ne,
  i as De,
  a as st,
  b as Z,
  c as it,
  G as nt,
  o as V,
  s as X,
  d as B,
  e as ot,
  f as at,
  q as Ce,
  h as Q,
  w as ee,
  T as be,
  j as ve,
  u as ke,
  k as we,
  l as rt,
  m as Ee,
  n as ct,
  p as lt,
  r as Ie,
  E as dt,
  t as ut,
} from './firebase-DbxlpnmS.js';
import './vite-plugin-node-polyfills-CYF0W5wK.js';
import { r as i, j as e, d as mt, b as pt } from './vendor-BEztx3UH.js';
import { B as gt } from './react-router-dom-Djf-viZn.js';
import { P as l } from './prop-types-BiVUseAU.js';
import { D as ft } from './react-datepicker-C0NVZxc2.js';
import { v as ht } from './uuid-BKT09osN.js';
import { u as L, a as xt, b as q } from './react-router-BqYFP2zy.js';
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
        for (const u of r.addedNodes)
          u.tagName === 'LINK' && u.rel === 'modulepreload' && a(u);
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
const Ae = {
    apiKey: 'AIzaSyAYV9vGuuJW0As2r6kZnDmEXdRWPBWWR4c',
    authDomain: 'reminder5-27ef0.firebaseapp.com',
    projectId: 'reminder5-27ef0',
    storageBucket: 'reminder5-27ef0.firebasestorage.app',
    messagingSenderId: void 0,
    appId: '1:230818023391:web:1813670f0600a50839266a',
    measurementId: 'G-41WKE3E4T3',
    databaseURL: 'https://reminder5-27ef0.firebaseio.com',
  },
  Pe = Ne().length ? st() : De(Ae),
  M = Z(Pe),
  R = it(Pe);
new nt();
function jt() {
  const t = JSON.parse(localStorage.getItem('tasks')) || [];
  t.forEach((n) => {
    const s = new Date(n.notificationTime).getTime(),
      a = new Date().getTime(),
      o = n.isNotified;
    if (s <= a && !o) {
      yt(n);
      const r = t.filter((u) => u.id !== n.id);
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
const Re = i.createContext(),
  Le = i.createContext(),
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
  Ct = (t, n) => {
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
  qe = ({ children: t }) => {
    const [n, s] = i.useReducer(Ct, { todoList: [] }),
      [a, o] = i.useState([]),
      [r, u] = i.useState(!1),
      [p, f] = i.useState(!1),
      [S, b] = i.useState(!1),
      [T, g] = i.useState(!1),
      [w, E] = i.useState(!1),
      [I, j] = i.useState(!1),
      [D, C] = i.useState(!1),
      [h, v] = i.useState(!1),
      [m, x] = i.useState(!1),
      [d, c] = i.useState(''),
      [y, A] = i.useState(''),
      [J, O] = i.useState(!1),
      [U, ne] = i.useState(!1),
      [_, oe] = i.useState(!1),
      [ae, re] = i.useState(!1),
      [z, ce] = i.useState(),
      [P, le] = i.useState(),
      [de, ue] = i.useState(),
      [me, pe] = i.useState(),
      [ge, fe] = i.useState(),
      [he, xe] = i.useState(),
      [H, $] = i.useState(),
      [je, ye] = i.useState(),
      [k, N] = i.useState(),
      [W, K] = i.useState(),
      [G, Te] = i.useState(!1),
      [Ge, Je] = i.useState(),
      [ze, Ke] = i.useState(!1),
      [Ye, Xe] = i.useState(),
      [Ze, Qe] = i.useState(!1),
      [et, tt] = i.useState(!1);
    return e.jsx(Re.Provider, {
      value: {
        todos: n,
        isDateChecked: S,
        setIsDateChecked: b,
        isTimeChecked: T,
        setIsTimeChecked: g,
        isContainerTimeCheck: I,
        setContainerTimeCheck: j,
        isContainerDateCheck: w,
        setContainerDateCheck: E,
        modalOpen: r,
        setModalOpen: u,
        displayTimePicker: h,
        setDisplayTimePicker: v,
        displayDatePicker: m,
        setDisplayDatePicker: x,
        isDateSet: p,
        setIsDateSet: f,
        isTimeSet: D,
        setIsTimeSet: C,
        enteredTodo: d,
        setEnteredTodo: c,
        fireTodo: y,
        setFireTodo: A,
        todosData: a,
        setTodosData: o,
        todoList: Tt,
        selectedDate: J,
        setSelectedDate: O,
        selectedTime: U,
        setSelectedTime: ne,
        AddTodosExecuted: ae,
        setAddTodosExecuted: re,
        completedDateTimeSetting: _,
        setCompletedDateTimeSetting: oe,
        notificationDocId: z,
        setNotificationDocId: ce,
        isSubmitting: P,
        setIsSubmitting: le,
        isDocRef: me,
        setIsDocRef: pe,
        reserveModeTodo: ge,
        setReserveModeTodo: fe,
        reserveModeId: he,
        setReserveModeId: xe,
        todoId: H,
        setTodoId: $,
        todoContent: je,
        setTodoContent: ye,
        Todo: k,
        setTodo: N,
        shouldHandleNotifications: G,
        setShouldHandleNotifications: Te,
        isSubmitting2: de,
        setIsSubmitting2: ue,
        agree: Ge,
        setAgree: Je,
        isSet: ze,
        setIsSet: Ke,
        docId: Ye,
        setDocId: Xe,
        Todo2: W,
        setTodo2: K,
        completedTask: Ze,
        setCompletedTask: Qe,
        completedTask2: et,
        setCompletedTask2: tt,
      },
      children: e.jsx(Le.Provider, { value: s, children: t }),
    });
  };
qe.propTypes = { children: l.node.isRequired };
const F = () => i.useContext(Re),
  ie = () => i.useContext(Le),
  Fe = i.createContext(),
  Oe = ({ children: t }) => {
    const { todos: n, todoList: s, AddTodosExecuted: a } = F(),
      [o, r] = i.useState(),
      [u, p] = i.useState(!0),
      [f, S] = i.useState([]),
      [b, T] = i.useState(!1),
      [g, w] = i.useState(),
      E = ie(),
      I = M.currentUser,
      [j, D] = i.useState(),
      C = i.useRef(null);
    i.useEffect(() => {
      const m = V(M, (x) => {
        x ? D(x.uid) : console.log('No user is signed in');
      });
      return () => m();
    }, []);
    const h = i.useMemo(
        () => ({
          toFirestore: (m) => {
            const x = Object.values(m),
              d = {};
            return (
              x.forEach((c, y) => {
                d[y.toString()] = {
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
              d
            );
          },
        }),
        []
      ),
      v = i.useMemo(
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
              const d = h.toFirestore(n),
                c = { todoId: I.uid, todos: d };
              await X(B(R, 'todoList3', I.uid), c);
            } catch (d) {
              console.error('Error adding todoList to Firestore:', d);
            } finally {
              p(!1);
            }
          },
          x = V(M, (d) => {
            d
              ? m(n, d.uid)
              : console.log('User signed out or not yet logged in');
          });
        return () => x();
      }, [E, n, R, h]),
      i.useEffect(() => {
        const m = async (d) => {
            try {
              const c = B(R, 'todoList3', d),
                y = await ot(c);
              if (y.exists()) {
                const J = y.data().todos || [],
                  O = v.fromFirestore(J);
                r(!0);
                const U = Array.isArray(O) ? O : [O];
                U !== null &&
                  U.length > 0 &&
                  (S(U),
                  r(!0),
                  (C.current = U),
                  E({ type: 'FETCH_TODOS', payload: U || [] }));
              }
            } catch (c) {
              console.error('Error fetching todoList to Firestore:', c);
            } finally {
              p(!1);
            }
          },
          x = V(M, (d) => {
            b ? console.log('User signed out') : m(d.uid);
          });
        return () => x();
      }, [v, E]),
      i.useEffect(() => {
        a &&
          (async () => {
            try {
              const x = h.toFirestore(n),
                d = { todoId: I.uid, todos: x };
              await X(B(R, 'todoList3', I.uid), d);
            } catch (x) {
              console.error('Error adding todoList to Firestore:', x);
            } finally {
              p(!1);
            }
          })();
      }, [a, E, n, v, h]),
      e.jsx(Fe.Provider, {
        value: {
          data: o,
          setData: r,
          loading: u,
          setLoading: p,
          fetchedData: f,
          setFetchedData: S,
          todoList: s,
          user: I,
          uid: j,
          firestore: R,
          convertdedNotificationData: g,
          setComvertedNotificationData: w,
          setTodosChanged: T,
        },
        children: t,
      })
    );
  };
Oe.propTypes = { children: l.node.isRequired };
const bt = () => i.useContext(Fe),
  Ue = ({
    handleTimeCheckboxChange: t,
    shouldHandleNotifications: n,
    timeCheck: s,
  }) => {
    Ue.propTypes = {
      handleTimeCheckboxChange: l.func.isRequired,
      shouldHandleNotifications: l.bool.isRequired,
      timeCheck: l.bool.isRequired,
    };
    const { isTimeChecked: a, setIsTimeChecked: o } = F();
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
  Y = ({
    handleTimeChange: t,
    inputTime: n,
    shouldHandleNotifications: s,
    timeCheck: a,
  }) => {
    Y.propTypes = {
      handleTimeChange: l.func.isRequired,
      inputTime: l.string.isRequired,
      shouldHandleNotifications: l.bool,
      timeCheck: l.bool,
    };
    const { setDisplayTimePicker: o, setDisplayDatePicker: r } = F();
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
  se = ({
    isDate: t,
    handleDateChange: n,
    shouldHandleNotifications: s,
    timeCheck: a,
  }) => {
    se.propTypes = {
      isDate: l.instanceOf(Date).isRequired,
      handleDateChange: l.func.isRequired,
      shouldHandleNotifications: l.bool,
      timeCheck: l.bool,
    };
    const {
      selectedDate: o,
      setDisplayDatePicker: r,
      setDisplayTimePicker: u,
    } = F();
    return (
      i.useEffect(() => {
        r(!0), u(!1);
      }, [u, r]),
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
  Me = ({
    handleDateCheckboxChange: t,
    shouldHandleNotifications: n,
    timeCheck: s,
  }) => {
    Me.propTypes = {
      handleDateCheckboxChange: l.func.isRequired,
      shouldHandleNotifications: l.bool.isRequired,
      timeCheck: l.bool.isRequired,
    };
    const { isDateChecked: a, setIsDateChecked: o } = F();
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
Ne().length || De(Ae);
const te = Z(),
  Be = ({
    shouldHandleNotifications: t = !1,
    completedDateTimeSetting: n = !1,
    todo: s = {},
  }) => {
    Be.propTypes = {
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
      completedTask: u,
      completedTask2: p,
      setCompletedTask2: f,
    } = F();
    localStorage.clear();
    const [S, b] = i.useState(),
      [T, g] = i.useState(null),
      [w, E] = i.useState(!1);
    V(te, (j) => {
      j && j.getIdToken(!0);
    }),
      i.useEffect(() => {
        const j = V(te, (D) => {
          if (D) {
            const C = te.currentUser;
            g(C), b(D.uid), r(s), E(!0);
          }
        });
        return () => j();
      }, []);
    const I = async () => {
      await ke(B(R, 'notifications', a), { isNotified: !0 });
    };
    return (
      i.useEffect(() => {
        const j = async () => {
          await ke(B(R, 'notifications', a), { docId: a });
        };
        return () => j();
      }, [n, t]),
      i.useEffect(() => {
        if (w) {
          const j = V(te, (D) => {
            D &&
              (async () => {
                const h = at(R, 'notifications'),
                  v = Ce(
                    h,
                    ee('todoId', '==', S),
                    ee('isNotified', '==', !1),
                    ee('notificationTime', '>=', be.now()),
                    Q('notificationTime'),
                    Q('__name__')
                  ),
                  d = (await ve(v)).docs
                    .map((y) => {
                      var A;
                      return {
                        ...y.data(),
                        id: y.id,
                        notificationTime:
                          (A = y.data().notificationTime) == null
                            ? void 0
                            : A.toDate(),
                        isNotified: y.data().isNotified,
                      };
                    })
                    .filter((y) => !y.isNotified);
                (() => {
                  const y = localStorage.getItem('tasks') || [];
                  d.forEach((A) => {
                    y.some((O) => O.id === A.id) ||
                      (y.push(A),
                      localStorage.setItem('tasks', JSON.stringify(y)));
                  });
                })();
              })();
          });
          return () => j();
        }
      }, [w, o, p, n, t]),
      i.useEffect(() => {
        (async () => {
          var v;
          const D = we(R, 'notifications'),
            C = Ce(
              D,
              ee('notificationTime', '<', be.now()),
              Q('notificationTime'),
              Q('__name__')
            ),
            h = await ve(C);
          for (const m of h.docs) {
            const x = m.id,
              c = (v = m.data().notificationTime) == null ? void 0 : v.toDate(),
              y = new Date().getTime(),
              A = new Date(c).getTime() + 24 * 60 * 60 * 1e3;
            (c > y || u) && (I(), f(!0)),
              A >= y && (await rt(B(R, 'notifications', x)));
          }
        })();
      }, [n, t, o, u]),
      null
    );
  },
  He = ({ todo: t }) => {
    He.propTypes = {
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
    const n = ie(),
      [s, a] = i.useState(new Date()),
      [o, r] = i.useState(new Date()),
      [u, p] = i.useState(''),
      [f, S] = i.useState(s),
      [b, T] = i.useState(o),
      [g, w] = i.useState(!1),
      [E, I] = i.useState(!0),
      [j, D] = i.useState(),
      {
        isDateChecked: C,
        isTimeChecked: h,
        setIsDateChecked: v,
        setIsTimeChecked: m,
        isContainerDateCheck: x,
        setContainerDateCheck: d,
        isContainerTimeCheck: c,
        setContainerTimeCheck: y,
        modalOpen: A,
        setIsTimeSet: J,
        setIsDateSet: O,
        setSelectedDate: U,
        setSelectedTime: ne,
        completedDateTimeSetting: _,
        setCompletedDateTimeSetting: oe,
        setNotificationDocId: ae,
        isSubmitting: re,
        setIsSubmitting: z,
        setIsDocRef: ce,
        shouldHandleNotifications: P,
        setShouldHandleNotifications: le,
        setDocId: de,
        Todo2: ue,
        setTodo2: me,
      } = F();
    i.useEffect(() => {
      const k = V(M, (N) => {
        N && D(N.uid);
      });
      return () => k();
    }, []),
      i.useEffect(() => {
        'Notification' in window || I(!1);
      }, []);
    const pe = () => {
        if (!E)
          return e.jsx('div', {
            className: 'warning-message',
            children: e.jsx('p', {
              className: 'warning',
              children: 'This browser does not supported notifications',
            }),
          });
      },
      ge = (k) => {
        v(!k);
      },
      fe = (k) => {
        m(!k);
      },
      he = (k) => {
        d(!0), y(!1), U(!0);
      },
      xe = (k) => {
        y(!0), d(!1), ne(!0);
      },
      H = (k) => {
        const N = new Date(k.target.value);
        a(N), O(!0);
      },
      $ = (k) => {
        const { value: N } = k.target,
          [W, K] = N.split(':'),
          G = new Date();
        G.setHours(parseInt(W), parseInt(K), 0, 0), r(G), p(N), J(!0), w(!0);
      },
      je = async (k) => {
        if (!re) {
          if ((z(!0), s && o && g && k.content && k.id)) {
            const N = new Date(s);
            N.setHours(o.getHours(), o.getMinutes(), 0, 0);
            try {
              const W = ht();
              de(W);
              const K = {
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
                G = B(we(R, 'notifications'), W);
              await X(G, K);
              const Te = { ...k, notification: !0 };
              n({ type: 'todo/notification', todo: Te }),
                ae(j),
                ce(G),
                oe(!0),
                le(!0),
                me(k);
            } catch (W) {
              console.error(
                'Error writing notification data to Firestore: ',
                W
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
        (s !== f || o !== b) && (s !== f || o !== b) && (S(s), T(o));
    }, [s, o]);
    const ye = () => {
      if (P)
        return e.jsx('div', {
          className: 'successful',
          children: e.jsx('h3', {
            className: 'set-message',
            children: 'Completed Setting',
          }),
        });
    };
    return A
      ? e.jsxs(
          'div',
          {
            className: 'modal',
            style: {
              backgroundColor:
                P && _ && g ? 'transparent' : 'rgba(40, 147, 247, 0.772)',
              border:
                P && _ && g
                  ? '1px solid rgb(8, 232, 158)'
                  : '1px solid rgb(48, 48, 219)',
            },
            children: [
              pe(),
              e.jsx('div', {
                className: 'switch-container',
                onClick: () => he(),
                children: e.jsx(Me, {
                  handleDateCheckboxChange: ge,
                  isChecked: C,
                  shouldHandleNotifications: P,
                  inputTime: u,
                  timeCheck: g,
                }),
              }),
              e.jsx('div', {
                className: 'switch-container2',
                onClick: () => xe(),
                children: e.jsx(Ue, {
                  handleTimeCheckboxChange: fe,
                  isChecked: h,
                  shouldHandleNotifications: P,
                  inputTime: u,
                  timeCheck: g,
                }),
              }),
              C && h && c
                ? e.jsx(Y, {
                    className: 'MyTimePicker',
                    onChange: $,
                    selected: o,
                    label: 'MyTimePicker',
                    inputVariant: 'outlined',
                    showTodayButton: !0,
                    ampm: !1,
                    autoOk: !0,
                    isTime: o,
                    inputTime: u,
                    setInputTime: p,
                    handleTimeChange: $,
                    shouldHandleNotifications: P,
                    timeCheck: g,
                  })
                : C && h && x
                  ? e.jsx(se, {
                      onChange: H,
                      selected: s,
                      isDate: s,
                      inputVariant: 'outlined',
                      handleDateChange: H,
                      shouldHandleNotifications: P,
                      inputTime: u,
                      timeCheck: g,
                    })
                  : C && h
                    ? e.jsx(Y, {
                        isTime: o,
                        handleTimeChange: $,
                        inputTime: u,
                        setInputTime: p,
                        inputVariant: 'outlined',
                        showTodayButton: !0,
                        ampm: !1,
                        autoOk: !0,
                      })
                    : C
                      ? e.jsx(se, {
                          onChange: H,
                          selected: s,
                          isDate: s,
                          handleDateChange: H,
                        })
                      : h
                        ? e.jsx(Y, {
                            isTime: o,
                            handleTimeChange: $,
                            inputTime: u,
                            inputVariant: 'outlined',
                            showTodayButton: !0,
                            ampm: !1,
                            autoOk: !0,
                            setInputTime: p,
                          })
                        : x
                          ? e.jsx(se, {
                              onChange: H,
                              selected: s,
                              isDate: s,
                              inputVariant: 'outlined',
                              handleDateChange: H,
                            })
                          : c
                            ? e.jsx(Y, {
                                isTime: o,
                                handleTimeChange: $,
                                inputTime: u,
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
                                      !x && !c && P && _ && g
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
                    onClick: () => je(t),
                    style: {
                      color:
                        P && g
                          ? 'rgb(8, 232, 158)'
                          : 'rgb(40, 147, 247, 0.772)',
                    },
                    children: P ? 'DONE' : 'SET',
                  }),
                  _ &&
                    P &&
                    e.jsx(Be, {
                      shouldHandleNotifications: P,
                      completedDateTimeSetting: _,
                      todo: ue,
                    }),
                ],
              }),
              ye(),
            ],
          },
          t.id
        )
      : null;
  },
  We = ({ todo: t }) => {
    We.propTypes = {
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
        setContainerDateCheck: u,
        setContainerTimeCheck: p,
        modalOpen: f,
        Todo: S,
        setTodo: b,
        setShouldHandleNotifications: T,
        isSet: g,
        setCompletedTask: w,
      } = F(),
      [E, I] = i.useState(t.content),
      j = ie(),
      D = (d) => {
        I(d.target.value);
      },
      C = () => {
        const d = { ...t, editing: !t.editing };
        j({ type: 'todo/update', todo: d });
      },
      h = (d) => {
        d.preventDefault();
        const c = { ...t, editing: !t.editing, content: E };
        j({ type: 'todo/update', todo: c });
      },
      v = (d) => {
        j({ type: 'todo/delete', todo: d }), w(!0);
      },
      m = (d) => {
        const c = { ...d, completed: !0 };
        j({ type: 'complete2', todo: c }), w(!0);
      },
      x = (d) => {
        const c = !d.editingColor,
          y = {
            ...d,
            editingDateTime: !0,
            editingColor: c,
            editingLock: !0,
            id: d.id,
            content: d.content,
          };
        j({ type: 'todo/reserve', todo: y }),
          j({ type: 'todo/reserveColor', todo: y }),
          j({ type: 'todo/editingDateTime', todo: y }),
          n((A) => !A),
          s(d),
          a(d.id),
          b(d),
          !f && o(!1),
          !f && r(!1),
          !f && u(!1),
          !f && p(!1),
          !f && T(!1);
      };
    return e.jsxs(
      'div',
      {
        className: 'modalParent',
        children: [
          e.jsx('span', {
            className: 'circleI',
            onClick: () => x(t),
            style: {
              color:
                g && t.editingColor && t.editingDateTime && t.editingLock
                  ? 'yellow'
                  : 'grey',
            },
            children: 'i',
          }),
          e.jsx('button', {
            className: 'compBtn',
            onClick: () => m(t),
            onDoubleClick: () => v(t),
            style: { color: t.completed ? 'rgb(8, 232, 158)' : 'none' },
            children: t.completed ? 'Completed' : 'Complete',
          }),
          e.jsx('form', {
            onSubmit: h,
            style: { display: 'inline' },
            children: t.editing
              ? e.jsx('input', { type: 'text', value: E, onChange: D })
              : e.jsx('span', {
                  className: 'content',
                  onDoubleClick: C,
                  style: {
                    textDecoration: t.completed ? 'line-through' : 'none',
                    color: t.completed ? 'rgb(8, 232, 158)' : 'none',
                  },
                  children: t.content,
                }),
          }),
          f && t.id == S.id
            ? e.jsx(
                'div',
                {
                  className: 'modal-container',
                  children: e.jsx(He, { todo: S }),
                },
                t.id
              )
            : null,
        ],
      },
      t.id
    );
  },
  vt = () => {
    const { todos: t } = F(),
      { data: n, loading: s } = bt();
    return e.jsx(e.Fragment, {
      children: s
        ? e.jsx('div', { children: 'Loading...' })
        : e.jsx('div', {
            children:
              Array.isArray(t) &&
              t.length > 0 &&
              n &&
              t &&
              t.map((a) => (a && a.id ? e.jsx(We, { todo: a }, a.id) : null)),
          }),
    });
  },
  kt = () => {
    const t = ie(),
      { enteredTodo: n, setEnteredTodo: s, setAddTodosExecuted: a } = F(),
      o = () => {
        const u = {
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
        t({ type: 'todo/add', todo: u, editing: !1 }), s(''), a(!0);
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
          onChange: (u) => {
            s(u.target.value);
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
  St = () => e.jsxs(e.Fragment, { children: [e.jsx(vt, {}), e.jsx(kt, {})] }),
  Nt = () => {
    const { modalOpen: t, timeCheck: n } = F(),
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
    const t = L(),
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
        e.jsx(Oe, { children: e.jsx(Nt, {}) }),
      ],
    });
  },
  Ve = () =>
    e.jsx(e.Fragment, { children: e.jsx(qe, { children: e.jsx(Dt, {}) }) }),
  wt = Z();
function _e() {
  return new Promise((t) => {
    const n = V(wt, (s) => {
      t(!!s), n();
    });
  });
}
function Et({ children: t }) {
  const n = L();
  return (
    i.useEffect(() => {
      _e().then((s) => {
        s || n('/UserAuth');
      });
    }, [n]),
    t
  );
}
const It = Z(),
  $e = () => {
    const t = L();
    let n = 5,
      s = [];
    for (let g = 0; g < n; g++) s.push(g);
    const [a, o] = i.useState(!1),
      r = () => '#fff',
      u = () => {
        t('/SignUp');
      },
      p = () => {
        t('/SignIn');
      },
      f = () => {
        Ee(It)
          .then(() => {
            o(!0), localStorage.clear();
          })
          .catch((g) => {
            console.error('ログアウトエラー:', g);
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
      b = () => {
        t('/EasyLogin');
      },
      T = () => {
        t('/DeleteAccount');
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx('div', {
          className: 'decoration',
          children: s.map((g, w) =>
            e.jsx(
              'span',
              { className: 'slash', style: { backgroundColor: r() } },
              w
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
                    onClick: () => u(),
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
                    onClick: () => f(),
                    children: 'Sign Out',
                  }),
                  e.jsx('span', {
                    className: 'select-auth easy-login',
                    onClick: () => b(),
                    children: 'お試しログイン',
                  }),
                  e.jsx('span', {
                    id: 'DA',
                    className: 'select-auth delete-account',
                    onClick: () => T(),
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
function At() {
  const t = L(),
    [n, s] = i.useState(!1);
  return (
    i.useEffect(() => {
      _e().then((a) => {
        a ? s(!0) : t('/UserAuth');
      });
    }, [t]),
    e.jsx(e.Fragment, {
      children: e.jsx('div', {
        children: e.jsx(Et, { children: n ? e.jsx(Ve, {}) : e.jsx($e, {}) }),
      }),
    })
  );
}
function Pt() {
  const t = L();
  i.useEffect(() => {
    (async () => {
      await Ee(M), setTimeout(() => t('/UserAuth'), 1e4);
    })(),
      localStorage.clear();
  }, [t]);
}
const Rt = [
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
function Lt() {
  const [t, n] = i.useState(!1),
    s = i.useMemo(
      () => ({
        toFirestore: (C) => {
          const h = Object.values(C),
            v = {};
          return (
            h.forEach((m, x) => {
              v[x.toString()] = {
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
            v
          );
        },
      }),
      []
    ),
    [a, o] = i.useState({ name: '', email: '', password: '' }),
    { name: r, email: u, password: p } = a,
    f = L(),
    S = [1, 2, 3, 4, 5],
    b = () => 'rgba(40, 147, 247, 0.772)',
    T = (C) => {
      o({ ...a, [C.target.id]: C.target.value });
    },
    g = () => {
      n(!0);
    },
    w = () => {
      f('/Terms');
    },
    E = () => {
      f('/Terms2');
    },
    I = () => {
      f('/PrivacyPolicy');
    },
    j = () => {
      f('/UserAuth');
    },
    D = async (C) => {
      C.preventDefault();
      try {
        if (p.length < 6)
          throw new Error('Password must be at least 6 characters long.');
        if (t) {
          const v = (await ct(M, u, p)).user;
          await lt(v, { displayName: r });
          const m = s.toFirestore(Rt),
            x = { todoId: v.uid, agreement: t, todos: m };
          await X(B(R, 'todoList3', v.uid), x),
            await X(B(R, 'notifications', v.uid), {}),
            f('/Example');
        } else
          return e.jsx('div', {
            children: e.jsx('h2', {
              children: 'Agreement Required 利用規約に同意が必要です。',
            }),
          });
      } catch (h) {
        alert(h.message),
          h.code === 'auth/email-already-in-use'
            ? alert(
                'This email is already in use. Please use a different email.'
              )
            : (console.error('Error signing up:', h.message), alert(h.message));
      }
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx('div', { className: 'triangle' }),
      e.jsx('div', {
        className: 'decoration',
        children: S.map((C, h) =>
          e.jsx(
            'span',
            { className: 'slash', style: { backgroundColor: b() } },
            h
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
            onSubmit: D,
            children: [
              e.jsx('input', {
                type: 'text',
                placeholder: 'Name',
                id: 'name',
                value: r,
                required: !0,
                onChange: T,
                className: 'form-input',
                autoComplete: 'name',
              }),
              e.jsx('input', {
                type: 'email',
                placeholder: 'Email',
                id: 'email',
                value: u,
                required: !0,
                onChange: T,
                className: 'form-input',
                autoComplete: 'email',
              }),
              e.jsx('input', {
                type: 'password',
                placeholder: 'Password',
                id: 'password',
                value: p,
                required: !0,
                onChange: T,
                className: 'form-input',
                autoComplete: 'current-password',
              }),
              e.jsxs('ul', {
                className: 'agreement-resource',
                children: [
                  e.jsx('li', {
                    className: 'terms',
                    onClick: () => w(),
                    children: 'Terms of Service Japanese',
                  }),
                  e.jsx('li', {
                    className: 'terms2',
                    onClick: () => E(),
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
                    onClick: () => g(),
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
function qt() {
  const [t, n] = i.useState({ email: '', password: '' }),
    { email: s, password: a } = t,
    o = L(),
    r = (b) => {
      n({ ...t, [b.target.id]: b.target.value });
    },
    u = async (b) => {
      b.preventDefault();
      try {
        (await Ie(M, s, a)) && o('/Example');
      } catch (T) {
        console.log(T);
      }
    },
    p = () => 'rgba(40, 147, 247, 0.772)',
    f = [1, 2, 3, 4, 5],
    S = () => {
      o('/UserAuth');
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx('div', {
        className: 'decoration',
        children: f.map((b, T) =>
          e.jsx(
            'span',
            { className: 'slash2', style: { backgroundColor: p() } },
            T
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
            onSubmit: u,
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
const Se = { email: 'Peace.875136D.time@gmail.com', password: '57tqw-7y6m' },
  Ft = () => {
    const t = L(),
      n = async () => {
        (await Ie(M, Se.email, Se.password)) && t('/Example');
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
  Ot = () => {
    const [t, n] = i.useState(!1),
      [s, a] = i.useState(''),
      [o, r] = i.useState(''),
      p = Z().currentUser,
      f = L(),
      S = async (T) => {
        if ((T.preventDefault(), p))
          try {
            const g = dt.credential(p.email, s);
            await ut(p, g), await b();
          } catch (g) {
            r(`再認証中にエラーが発生しました: ${g.message}`);
          }
      },
      b = async () => {
        if (p)
          try {
            await p.delete(),
              r('ユーザーアカウントが削除されました'),
              setTimeout(() => f('/UserAuth'), 3e3);
          } catch (T) {
            T.code === 'auth/requires-recent-login'
              ? n(!0)
              : (r(`アカウント削除中にエラーが発生しました: ${T.message}`),
                setTimeout(() => f('/UserAuth', 1e4)));
          }
        else
          r('サインインしているユーザーがいません'),
            setTimeout(() => f('/UserAuth'), 1e4);
      };
    return (
      i.useEffect(() => {
        t || b();
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
                    onSubmit: S,
                    children: [
                      e.jsx('div', {
                        children: e.jsxs('label', {
                          children: [
                            'Password:',
                            e.jsx('input', {
                              className: 'form-input',
                              type: 'password',
                              value: s,
                              onChange: (T) => a(T.target.value),
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
  Ut = () => {
    const t = L(),
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
  Mt = () => {
    const t = L(),
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
  Bt = () => {
    const t = L(),
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
function Ht() {
  return e.jsx('div', {
    className: 'App',
    children: e.jsx(gt, {
      future: { v7_startTransition: !0, v7_relativeSplatPath: !0 },
      children: e.jsxs(xt, {
        children: [
          e.jsx(q, { path: '/', element: e.jsx(At, {}) }),
          e.jsx(q, { path: '/Example', element: e.jsx(Ve, {}) }),
          e.jsx(q, { path: '/UserAuth', element: e.jsx($e, {}) }),
          e.jsx(q, { path: '/SignOut', element: e.jsx(Pt, {}) }),
          e.jsx(q, { path: '/SignUp', element: e.jsx(Lt, {}) }),
          e.jsx(q, { path: '/SignIn', element: e.jsx(qt, {}) }),
          e.jsx(q, { path: '/EasyLogin', element: e.jsx(Ft, {}) }),
          e.jsx(q, { path: '/DeleteAccount', element: e.jsx(Ot, {}) }),
          e.jsx(q, { path: '/PrivacyPolicy', element: e.jsx(Ut, {}) }),
          e.jsx(q, { path: '/Terms', element: e.jsx(Mt, {}) }),
          e.jsx(q, { path: '/Terms2', element: e.jsx(Bt, {}) }),
        ],
      }),
    }),
  });
}
const Wt = mt(document.getElementById('root'));
Wt.render(e.jsx(pt.StrictMode, { children: e.jsx(Ht, {}) }));
