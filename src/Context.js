import React,{useReducer,useContext,useRef, createContext} from "react";

const StateContext = createContext(null);
const DispatchContext = createContext(null);
const NextIdContext = createContext(null);

function reducer(state,action){
    switch(action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo
                );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        
        default:
            return state;
    }
}

const intodolist = [
    {
        id: 1,
        text: '리액트 공부',
        done: true
    },
    {
        id: 2,
        text: '면접대비',
        done: true
    },
    {
        id: 3,
        text: '블로그 쓰기',
        done: true
    },
    {
        id: 4,
        text: '게임',
        done: false
    }
];

/*

렌더링이란? 서버로부터 HTML 파일을 받아서 브라우저에 뿌리는 과정 

Context에서 사용할 값을 지정할 때는 아래와 같이 Provider컴포넌트를 렌더링하고 value값을 설정하면 된다.
    props로 받아온 children값을 내부네 랜더링 해준다.
    이렇게 하면 다른 컴포넌트에서 state나 dispatch를 사용하고 싶을때 다음과 같이 할 수 있다.
    

*/

export function Provider({children}){
    const [state,dispatch] = useReducer(reducer,intodolist);
    const nextId = useRef(5);

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                <NextIdContext.Provider value={nextId}>
                    {children}
                </NextIdContext.Provider>
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
}

export function useState(){
    return useContext(StateContext);
}

export function useDispatch(){
    return useContext(DispatchContext);
}

export function useNextId() {
    return useContext(NextIdContext);
}


/* createContext: 생성한 context객체를 원하는 클래스의 contextType 프로퍼티로 지정
property :이름이나 값을 가지고 있다. (key, value)*/