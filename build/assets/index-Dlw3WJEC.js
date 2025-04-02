import {
  g as Ne,
  i as De,
  a as st,
  b as Q,
  c as it,
  G as nt,
  o as W,
  s as Z,
  d as U,
  e as ot,
  f as at,
  q as Ce,
  h as ee,
  w as Y,
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
} from './firebase-KD7rklqF.js';
import './vite-plugin-node-polyfills-CYF0W5wK.js';
import { r as i, j as e, d as mt, b as pt } from './vendor-BEztx3UH.js';
import { B as gt } from './react-router-dom-Djf-viZn.js';
import { P as l } from './prop-types-BiVUseAU.js';
import { D as ht } from './react-datepicker-C0NVZxc2.js';
import { v as ft } from './uuid-BKT09osN.js';
import { u as R, a as xt, b as L } from './react-router-BqYFP2zy.js';
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
    for (const c of o)
      if (c.type === 'childList')
        for (const u of c.addedNodes)
          u.tagName === 'LINK' && u.rel === 'modulepreload' && a(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(o) {
    const c = {};
    return (
      o.integrity && (c.integrity = o.integrity),
      o.referrerPolicy && (c.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (c.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (c.credentials = 'omit')
          : (c.credentials = 'same-origin'),
      c
    );
  }
  function a(o) {
    if (o.ep) return;
    o.ep = !0;
    const c = s(o);
    fetch(o.href, c);
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
  O = Q(Pe),
  P = it(Pe);
new nt();
function jt() {
  const t = JSON.parse(localStorage.getItem('tasks')) || [];
  t.forEach((n) => {
    const s = new Date(n.notificationTime).getTime(),
      a = new Date().getTime(),
      o = n.isNotified;
    if (s <= a && !o) {
      yt(n);
      const c = t.filter((u) => u.id !== n.id);
      localStorage.setItem('tasks', JSON.stringify(c));
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
      [c, u] = i.useState(!1),
      [p, h] = i.useState(!1),
      [k, C] = i.useState(!1),
      [y, g] = i.useState(!1),
      [w, E] = i.useState(!1),
      [I, j] = i.useState(!1),
      [D, T] = i.useState(!1),
      [f, b] = i.useState(!1),
      [m, x] = i.useState(!1),
      [d, r] = i.useState(''),
      [S, M] = i.useState(''),
      [J, V] = i.useState(!1),
      [F, ne] = i.useState(!1),
      [_, oe] = i.useState(!1),
      [ae, re] = i.useState(!1),
      [z, ce] = i.useState(),
      [A, le] = i.useState(),
      [de, ue] = i.useState(),
      [me, pe] = i.useState(),
      [ge, he] = i.useState(),
      [fe, xe] = i.useState(),
      [B, $] = i.useState(),
      [je, ye] = i.useState(),
      [v, N] = i.useState(),
      [H, K] = i.useState(),
      [G, Te] = i.useState(!1),
      [Ge, Je] = i.useState(),
      [ze, Ke] = i.useState(!1),
      [Ye, Xe] = i.useState(),
      [Ze, Qe] = i.useState(!1),
      [et, tt] = i.useState(!1);
    return e.jsx(Re.Provider, {
      value: {
        todos: n,
        isDateChecked: k,
        setIsDateChecked: C,
        isTimeChecked: y,
        setIsTimeChecked: g,
        isContainerTimeCheck: I,
        setContainerTimeCheck: j,
        isContainerDateCheck: w,
        setContainerDateCheck: E,
        modalOpen: c,
        setModalOpen: u,
        displayTimePicker: f,
        setDisplayTimePicker: b,
        displayDatePicker: m,
        setDisplayDatePicker: x,
        isDateSet: p,
        setIsDateSet: h,
        isTimeSet: D,
        setIsTimeSet: T,
        enteredTodo: d,
        setEnteredTodo: r,
        fireTodo: S,
        setFireTodo: M,
        todosData: a,
        setTodosData: o,
        todoList: Tt,
        selectedDate: J,
        setSelectedDate: V,
        selectedTime: F,
        setSelectedTime: ne,
        AddTodosExecuted: ae,
        setAddTodosExecuted: re,
        completedDateTimeSetting: _,
        setCompletedDateTimeSetting: oe,
        notificationDocId: z,
        setNotificationDocId: ce,
        isSubmitting: A,
        setIsSubmitting: le,
        isDocRef: me,
        setIsDocRef: pe,
        reserveModeTodo: ge,
        setReserveModeTodo: he,
        reserveModeId: fe,
        setReserveModeId: xe,
        todoId: B,
        setTodoId: $,
        todoContent: je,
        setTodoContent: ye,
        Todo: v,
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
        Todo2: H,
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
const q = () => i.useContext(Re),
  ie = () => i.useContext(Le),
  Fe = i.createContext(),
  Oe = ({ children: t }) => {
    const { todos: n, todoList: s, AddTodosExecuted: a } = q(),
      [o, c] = i.useState(),
      [u, p] = i.useState(!0),
      [h, k] = i.useState([]),
      [C, y] = i.useState(!1),
      [g, w] = i.useState(),
      E = ie(),
      I = O.currentUser,
      [j, D] = i.useState(),
      T = i.useRef(null);
    i.useEffect(() => {
      const m = W(O, (x) => {
        x ? D(x.uid) : console.log('No user is signed in');
      });
      return () => m();
    }, []);
    const f = i.useMemo(
        () => ({
          toFirestore: (m) => {
            const x = Object.values(m),
              d = {};
            return (
              x.forEach((r, S) => {
                d[S.toString()] = {
                  title: r.title,
                  description: r.description,
                  type: r.type,
                  id: r.id,
                  content: r.content,
                  editing: r.editing,
                  completed: r.completed,
                  reserve: r.reserve,
                  editingLock: r.editingLock,
                  editingColor: r.editingColor,
                  editingDateTime: r.editingDateTime,
                  notification: r.notification,
                };
              }),
              d
            );
          },
        }),
        []
      ),
      b = i.useMemo(
        () => ({
          fromFirestore: (m) =>
            Object.values(m).map((r) => ({
              title: r.title,
              description: r.description,
              type: r.type,
              id: r.id,
              content: r.content,
              editing: r.editing,
              completed: r.completed,
              reserve: r.reserve,
              editingLock: r.editingLock,
              editingColor: r.editingColor,
              editingDateTime: r.editingDateTime,
              notification: r.notification,
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
              const d = f.toFirestore(n),
                r = { todoId: I.uid, todos: d };
              await Z(U(P, 'todoList3', I.uid), r);
            } catch (d) {
              console.error('Error adding todoList to Firestore:', d);
            } finally {
              p(!1);
            }
          },
          x = W(O, (d) => {
            d
              ? m(n, d.uid)
              : console.log('User signed out or not yet logged in');
          });
        return () => x();
      }, [E, n, P, f]),
      i.useEffect(() => {
        const m = async (d) => {
            try {
              const r = U(P, 'todoList3', d),
                S = await ot(r);
              if (S.exists()) {
                const J = S.data().todos || [],
                  V = b.fromFirestore(J);
                c(!0);
                const F = Array.isArray(V) ? V : [V];
                F !== null &&
                  F.length > 0 &&
                  (k(F),
                  c(!0),
                  (T.current = F),
                  E({ type: 'FETCH_TODOS', payload: F || [] }));
              }
            } catch (r) {
              console.error('Error fetching todoList to Firestore:', r);
            } finally {
              p(!1);
            }
          },
          x = W(O, (d) => {
            C ? console.log('User signed out') : m(d.uid);
          });
        return () => x();
      }, [b, E]),
      i.useEffect(() => {
        a &&
          (async () => {
            try {
              const x = f.toFirestore(n),
                d = { todoId: I.uid, todos: x };
              await Z(U(P, 'todoList3', I.uid), d);
            } catch (x) {
              console.error('Error adding todoList to Firestore:', x);
            } finally {
              p(!1);
            }
          })();
      }, [a, E, n, b, f]),
      e.jsx(Fe.Provider, {
        value: {
          data: o,
          setData: c,
          loading: u,
          setLoading: p,
          fetchedData: h,
          setFetchedData: k,
          todoList: s,
          user: I,
          uid: j,
          firestore: P,
          convertdedNotificationData: g,
          setComvertedNotificationData: w,
          setTodosChanged: y,
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
    const { isTimeChecked: a, setIsTimeChecked: o } = q();
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
  X = ({
    handleTimeChange: t,
    inputTime: n,
    shouldHandleNotifications: s,
    timeCheck: a,
  }) => {
    X.propTypes = {
      handleTimeChange: l.func.isRequired,
      inputTime: l.string.isRequired,
      shouldHandleNotifications: l.bool,
      timeCheck: l.bool,
    };
    const { setDisplayTimePicker: o, setDisplayDatePicker: c } = q();
    return (
      i.useEffect(() => {
        o(!0), c(!1);
      }, [o, c]),
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
      setDisplayDatePicker: c,
      setDisplayTimePicker: u,
    } = q();
    return (
      i.useEffect(() => {
        c(!0), u(!1);
      }, [u, c]),
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
          e.jsx(ht, {
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
    const { isDateChecked: a, setIsDateChecked: o } = q();
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
const te = Q(),
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
      setTodo2: c,
      completedTask: u,
      completedTask2: p,
      setCompletedTask2: h,
    } = q();
    localStorage.clear();
    const [k, C] = i.useState(),
      [y, g] = i.useState(null),
      [w, E] = i.useState(!1);
    W(te, (j) => {
      j && j.getIdToken(!0);
    }),
      i.useEffect(() => {
        const j = W(te, (D) => {
          if (D) {
            const T = te.currentUser;
            g(T), C(D.uid), c(s), E(!0);
          }
        });
        return () => j();
      }, []);
    const I = async () => {
      await ke(U(P, 'notifications', a), { isNotified: !0 });
    };
    return (
      i.useEffect(() => {
        const j = async () => {
          await ke(U(P, 'notifications', a), { docId: a });
        };
        return () => j();
      }, [n, t]),
      i.useEffect(() => {
        if (w) {
          const j = W(te, (D) => {
            D &&
              (async () => {
                const f = at(P, 'notifications'),
                  b = Ce(
                    f,
                    Y('todoId', '==', k),
                    Y('docId', '==', a),
                    Y('isNotified', '==', !1),
                    Y('notificationTime', '>=', be.now()),
                    ee('notificationTime'),
                    ee('__name__')
                  ),
                  d = (await ve(b)).docs
                    .map((r) => {
                      var S;
                      return {
                        ...r.data(),
                        id: r.id,
                        notificationTime:
                          (S = r.data().notificationTime) == null
                            ? void 0
                            : S.toDate(),
                        isNotified: r.data().isNotified,
                      };
                    })
                    .filter((r) => !r.isNotified);
                localStorage.setItem('tasks', JSON.stringify(d));
              })();
          });
          return () => j();
        }
      }, [w, o, p]),
      i.useEffect(() => {
        (async () => {
          var b;
          const D = we(P, 'notifications'),
            T = Ce(
              D,
              Y('notificationTime', '<', be.now()),
              ee('notificationTime'),
              ee('__name__')
            ),
            f = await ve(T);
          for (const m of f.docs) {
            const x = m.id,
              r = (b = m.data().notificationTime) == null ? void 0 : b.toDate(),
              S = new Date().getTime(),
              M = new Date(r).getTime() + 24 * 60 * 60 * 1e3;
            (r <= S || u) && (I(), h(!0)),
              M <= S && (await rt(U(P, 'notifications', x)));
          }
        })();
      }, [n, t, u]),
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
      [o, c] = i.useState(new Date()),
      [u, p] = i.useState(''),
      [h, k] = i.useState(s),
      [C, y] = i.useState(o),
      [g, w] = i.useState(!1),
      [E, I] = i.useState(!0),
      [j, D] = i.useState(),
      {
        isDateChecked: T,
        isTimeChecked: f,
        setIsDateChecked: b,
        setIsTimeChecked: m,
        isContainerDateCheck: x,
        setContainerDateCheck: d,
        isContainerTimeCheck: r,
        setContainerTimeCheck: S,
        modalOpen: M,
        setIsTimeSet: J,
        setIsDateSet: V,
        setSelectedDate: F,
        setSelectedTime: ne,
        completedDateTimeSetting: _,
        setCompletedDateTimeSetting: oe,
        setNotificationDocId: ae,
        isSubmitting: re,
        setIsSubmitting: z,
        setIsDocRef: ce,
        shouldHandleNotifications: A,
        setShouldHandleNotifications: le,
        setDocId: de,
        Todo2: ue,
        setTodo2: me,
      } = q();
    i.useEffect(() => {
      const v = W(O, (N) => {
        N && D(N.uid);
      });
      return () => v();
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
      ge = (v) => {
        b(!v);
      },
      he = (v) => {
        m(!v);
      },
      fe = (v) => {
        d(!0), S(!1), F(!0);
      },
      xe = (v) => {
        S(!0), d(!1), ne(!0);
      },
      B = (v) => {
        const N = new Date(v.target.value);
        a(N), V(!0);
      },
      $ = (v) => {
        const { value: N } = v.target,
          [H, K] = N.split(':'),
          G = new Date();
        G.setHours(parseInt(H), parseInt(K), 0, 0), c(G), p(N), J(!0), w(!0);
      },
      je = async (v) => {
        if (!re) {
          if ((z(!0), s && o && g && v.content && v.id)) {
            const N = new Date(s);
            N.setHours(o.getHours(), o.getMinutes(), 0, 0);
            try {
              const H = ft();
              de(H);
              const K = {
                  title: 'Reminder',
                  description:
                    'Time is approaching, receive to push notification..',
                  type: 'string',
                  notificationTime: N,
                  todoId: j,
                  content: v.content,
                  id: v.id,
                  isNotified: !1,
                  docId: 'xxx',
                },
                G = U(we(P, 'notifications'), H);
              await Z(G, K);
              const Te = { ...v, notification: !0 };
              n({ type: 'todo/notification', todo: Te }),
                ae(j),
                ce(G),
                oe(!0),
                le(!0),
                me(v);
            } catch (H) {
              console.error(
                'Error writing notification data to Firestore: ',
                H
              );
            } finally {
              z(!1);
            }
          } else z(!1);
          try {
            const N = await Notification.requestPermission();
            N === 'granted'
              ? console.log('')
              : console.warn(
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
      const v = document.querySelector('.modal');
      (v.style.alignItems = 'center'),
        (s !== h || o !== C) && (s !== h || o !== C) && (k(s), y(o));
    }, [s, o]);
    const ye = () => {
      if (A)
        return e.jsx('div', {
          className: 'successful',
          children: e.jsx('h3', {
            className: 'set-message',
            children: 'Completed Setting',
          }),
        });
    };
    return M
      ? e.jsxs(
          'div',
          {
            className: 'modal',
            style: {
              backgroundColor:
                A && _ && g ? 'transparent' : 'rgba(40, 147, 247, 0.772)',
              border:
                A && _ && g
                  ? '1px solid rgb(8, 232, 158)'
                  : '1px solid rgb(48, 48, 219)',
            },
            children: [
              pe(),
              e.jsx('div', {
                className: 'switch-container',
                onClick: () => fe(),
                children: e.jsx(Me, {
                  handleDateCheckboxChange: ge,
                  isChecked: T,
                  shouldHandleNotifications: A,
                  inputTime: u,
                  timeCheck: g,
                }),
              }),
              e.jsx('div', {
                className: 'switch-container2',
                onClick: () => xe(),
                children: e.jsx(Ue, {
                  handleTimeCheckboxChange: he,
                  isChecked: f,
                  shouldHandleNotifications: A,
                  inputTime: u,
                  timeCheck: g,
                }),
              }),
              T && f && r
                ? e.jsx(X, {
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
                    shouldHandleNotifications: A,
                    timeCheck: g,
                  })
                : T && f && x
                  ? e.jsx(se, {
                      onChange: B,
                      selected: s,
                      isDate: s,
                      inputVariant: 'outlined',
                      handleDateChange: B,
                      shouldHandleNotifications: A,
                      inputTime: u,
                      timeCheck: g,
                    })
                  : T && f
                    ? e.jsx(X, {
                        isTime: o,
                        handleTimeChange: $,
                        inputTime: u,
                        setInputTime: p,
                        inputVariant: 'outlined',
                        showTodayButton: !0,
                        ampm: !1,
                        autoOk: !0,
                      })
                    : T
                      ? e.jsx(se, {
                          onChange: B,
                          selected: s,
                          isDate: s,
                          handleDateChange: B,
                        })
                      : f
                        ? e.jsx(X, {
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
                              onChange: B,
                              selected: s,
                              isDate: s,
                              inputVariant: 'outlined',
                              handleDateChange: B,
                            })
                          : r
                            ? e.jsx(X, {
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
                                      !x && !r && A && _ && g
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
                        A && g
                          ? 'rgb(8, 232, 158)'
                          : 'rgb(40, 147, 247, 0.772)',
                    },
                    children: A ? 'DONE' : 'SET',
                  }),
                  _ &&
                    A &&
                    e.jsx(Be, {
                      shouldHandleNotifications: A,
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
        setIsTimeChecked: c,
        setContainerDateCheck: u,
        setContainerTimeCheck: p,
        modalOpen: h,
        Todo: k,
        setTodo: C,
        setShouldHandleNotifications: y,
        isSet: g,
        setCompletedTask: w,
      } = q(),
      [E, I] = i.useState(t.content),
      j = ie(),
      D = (d) => {
        I(d.target.value);
      },
      T = () => {
        const d = { ...t, editing: !t.editing };
        j({ type: 'todo/update', todo: d });
      },
      f = (d) => {
        d.preventDefault();
        const r = { ...t, editing: !t.editing, content: E };
        j({ type: 'todo/update', todo: r });
      },
      b = (d) => {
        j({ type: 'todo/delete', todo: d }), w(!0);
      },
      m = (d) => {
        const r = { ...d, completed: !0 };
        j({ type: 'complete2', todo: r }), w(!0);
      },
      x = (d) => {
        const r = !d.editingColor,
          S = {
            ...d,
            editingDateTime: !0,
            editingColor: r,
            editingLock: !0,
            id: d.id,
            content: d.content,
          };
        j({ type: 'todo/reserve', todo: S }),
          j({ type: 'todo/reserveColor', todo: S }),
          j({ type: 'todo/editingDateTime', todo: S }),
          n((M) => !M),
          s(d),
          a(d.id),
          C(d),
          !h && o(!1),
          !h && c(!1),
          !h && u(!1),
          !h && p(!1),
          !h && y(!1);
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
            onDoubleClick: () => b(t),
            style: { color: t.completed ? 'rgb(8, 232, 158)' : 'none' },
            children: t.completed ? 'Completed' : 'Complete',
          }),
          e.jsx('form', {
            onSubmit: f,
            style: { display: 'inline' },
            children: t.editing
              ? e.jsx('input', { type: 'text', value: E, onChange: D })
              : e.jsx('span', {
                  className: 'content',
                  onDoubleClick: T,
                  style: {
                    textDecoration: t.completed ? 'line-through' : 'none',
                    color: t.completed ? 'rgb(8, 232, 158)' : 'none',
                  },
                  children: t.content,
                }),
          }),
          h && t.id == k.id
            ? e.jsx(
                'div',
                {
                  className: 'modal-container',
                  children: e.jsx(He, { todo: k }),
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
    const { todos: t } = q(),
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
      { enteredTodo: n, setEnteredTodo: s, setAddTodosExecuted: a } = q(),
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
      c = () => {
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
              onClick: () => c(),
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
    const { modalOpen: t, timeCheck: n } = q(),
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
          children: s.map((o, c) =>
            e.jsx(
              'span',
              { className: 'slash', style: { backgroundColor: a() } },
              c
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
    const t = R(),
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
  wt = Q();
function _e() {
  return new Promise((t) => {
    const n = W(wt, (s) => {
      t(!!s), n();
    });
  });
}
function Et({ children: t }) {
  const n = R();
  return (
    i.useEffect(() => {
      _e().then((s) => {
        s || n('/UserAuth');
      });
    }, [n]),
    t
  );
}
const It = Q(),
  $e = () => {
    const t = R();
    let n = 5,
      s = [];
    for (let g = 0; g < n; g++) s.push(g);
    const [a, o] = i.useState(!1),
      c = () => '#fff',
      u = () => {
        t('/SignUp');
      },
      p = () => {
        t('/SignIn');
      },
      h = () => {
        Ee(It)
          .then(() => {
            o(!0), localStorage.clear();
          })
          .catch((g) => {
            console.error('ログアウトエラー:', g);
          });
      },
      k = () => {
        if (a)
          return e.jsx('div', {
            className: 'sign-out2',
            children: e.jsx('h3', { children: 'Signed Out successfully' }),
          });
        setTimeout(() => o(!1), 5e3);
      },
      C = () => {
        t('/EasyLogin');
      },
      y = () => {
        t('/DeleteAccount');
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx('div', {
          className: 'decoration',
          children: s.map((g, w) =>
            e.jsx(
              'span',
              { className: 'slash', style: { backgroundColor: c() } },
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
                    onClick: () => h(),
                    children: 'Sign Out',
                  }),
                  e.jsx('span', {
                    className: 'select-auth easy-login',
                    onClick: () => C(),
                    children: 'お試しログイン',
                  }),
                  e.jsx('span', {
                    id: 'DA',
                    className: 'select-auth delete-account',
                    onClick: () => y(),
                    children: 'Delete Account',
                  }),
                ],
              }),
            }),
            k(),
          ],
        }),
      ],
    });
  };
function At() {
  const t = R(),
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
  const t = R();
  i.useEffect(() => {
    (async () => {
      await Ee(O), setTimeout(() => t('/UserAuth'), 1e4);
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
        toFirestore: (T) => {
          const f = Object.values(T),
            b = {};
          return (
            f.forEach((m, x) => {
              b[x.toString()] = {
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
    { name: c, email: u, password: p } = a,
    h = R(),
    k = [1, 2, 3, 4, 5],
    C = () => 'rgba(40, 147, 247, 0.772)',
    y = (T) => {
      o({ ...a, [T.target.id]: T.target.value });
    },
    g = () => {
      n(!0);
    },
    w = () => {
      h('/Terms');
    },
    E = () => {
      h('/Terms2');
    },
    I = () => {
      h('/PrivacyPolicy');
    },
    j = () => {
      h('/UserAuth');
    },
    D = async (T) => {
      T.preventDefault();
      try {
        if (p.length < 6)
          throw new Error('Password must be at least 6 characters long.');
        if (t) {
          const b = (await ct(O, u, p)).user;
          await lt(b, { displayName: c });
          const m = s.toFirestore(Rt),
            x = { todoId: b.uid, agreement: t, todos: m };
          await Z(U(P, 'todoList3', b.uid), x),
            await Z(U(P, 'notifications', b.uid), {}),
            h('/Example');
        } else
          return e.jsx('div', {
            children: e.jsx('h2', {
              children: 'Agreement Required 利用規約に同意が必要です。',
            }),
          });
      } catch (f) {
        alert(f.message),
          f.code === 'auth/email-already-in-use'
            ? alert(
                'This email is already in use. Please use a different email.'
              )
            : (console.error('Error signing up:', f.message), alert(f.message));
      }
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx('div', { className: 'triangle' }),
      e.jsx('div', {
        className: 'decoration',
        children: k.map((T, f) =>
          e.jsx(
            'span',
            { className: 'slash', style: { backgroundColor: C() } },
            f
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
                value: c,
                required: !0,
                onChange: y,
                className: 'form-input',
                autoComplete: 'name',
              }),
              e.jsx('input', {
                type: 'email',
                placeholder: 'Email',
                id: 'email',
                value: u,
                required: !0,
                onChange: y,
                className: 'form-input',
                autoComplete: 'email',
              }),
              e.jsx('input', {
                type: 'password',
                placeholder: 'Password',
                id: 'password',
                value: p,
                required: !0,
                onChange: y,
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
    o = R(),
    c = (C) => {
      n({ ...t, [C.target.id]: C.target.value });
    },
    u = async (C) => {
      C.preventDefault();
      try {
        (await Ie(O, s, a)) && o('/Example');
      } catch (y) {
        console.log(y);
      }
    },
    p = () => 'rgba(40, 147, 247, 0.772)',
    h = [1, 2, 3, 4, 5],
    k = () => {
      o('/UserAuth');
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx('div', {
        className: 'decoration',
        children: h.map((C, y) =>
          e.jsx(
            'span',
            { className: 'slash2', style: { backgroundColor: p() } },
            y
          )
        ),
      }),
      e.jsx('span', {
        className: 'back',
        onClick: k,
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
                onChange: c,
                className: 'form-input',
                autoComplete: 'email',
              }),
              e.jsx('input', {
                type: 'password',
                placeholder: 'Password',
                id: 'password',
                value: a,
                required: !0,
                onChange: c,
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
    const t = R(),
      n = async () => {
        (await Ie(O, Se.email, Se.password)) && t('/Example');
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
      [o, c] = i.useState(''),
      p = Q().currentUser,
      h = R(),
      k = async (y) => {
        if ((y.preventDefault(), p))
          try {
            const g = dt.credential(p.email, s);
            await ut(p, g), await C();
          } catch (g) {
            c(`再認証中にエラーが発生しました: ${g.message}`);
          }
      },
      C = async () => {
        if (p)
          try {
            await p.delete(),
              c('ユーザーアカウントが削除されました'),
              setTimeout(() => h('/UserAuth'), 3e3);
          } catch (y) {
            y.code === 'auth/requires-recent-login'
              ? n(!0)
              : (c(`アカウント削除中にエラーが発生しました: ${y.message}`),
                setTimeout(() => h('/UserAuth', 1e4)));
          }
        else
          c('サインインしているユーザーがいません'),
            setTimeout(() => h('/UserAuth'), 1e4);
      };
    return (
      i.useEffect(() => {
        t || C();
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
                    onSubmit: k,
                    children: [
                      e.jsx('div', {
                        children: e.jsxs('label', {
                          children: [
                            'Password:',
                            e.jsx('input', {
                              className: 'form-input',
                              type: 'password',
                              value: s,
                              onChange: (y) => a(y.target.value),
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
    const t = R(),
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
    const t = R(),
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
    const t = R(),
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
          e.jsx(L, { path: '/', element: e.jsx(At, {}) }),
          e.jsx(L, { path: '/Example', element: e.jsx(Ve, {}) }),
          e.jsx(L, { path: '/UserAuth', element: e.jsx($e, {}) }),
          e.jsx(L, { path: '/SignOut', element: e.jsx(Pt, {}) }),
          e.jsx(L, { path: '/SignUp', element: e.jsx(Lt, {}) }),
          e.jsx(L, { path: '/SignIn', element: e.jsx(qt, {}) }),
          e.jsx(L, { path: '/EasyLogin', element: e.jsx(Ft, {}) }),
          e.jsx(L, { path: '/DeleteAccount', element: e.jsx(Ot, {}) }),
          e.jsx(L, { path: '/PrivacyPolicy', element: e.jsx(Ut, {}) }),
          e.jsx(L, { path: '/Terms', element: e.jsx(Mt, {}) }),
          e.jsx(L, { path: '/Terms2', element: e.jsx(Bt, {}) }),
        ],
      }),
    }),
  });
}
const Wt = mt(document.getElementById('root'));
Wt.render(e.jsx(pt.StrictMode, { children: e.jsx(Ht, {}) }));
