```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Set a timeout to stop the infinite loop 
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval); // Cleanup function
  }, []);

  return <div>Count: {count}</div>;
}
```