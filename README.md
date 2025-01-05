# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications where an infinite loop is created within a `useEffect` hook. The bug arises from improperly managing the dependency array, leading to the effect running repeatedly without a defined stopping condition.

## Bug Description
The provided code uses the `useState` hook to manage a count variable.  The `useEffect` hook attempts to increment the count on every render. Since `count` is included in the dependency array, the effect is triggered by every change to `count`, resulting in an infinite loop.  The browser will likely freeze or crash due to this behavior.