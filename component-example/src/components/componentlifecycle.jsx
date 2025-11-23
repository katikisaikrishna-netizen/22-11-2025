import { useEffect } from "react";
function ComponentExample() {
  useEffect(() => {
    console.log('useEffect example');   
  }, []);
    return (
        <div>
            Component Lifecycle Examples
        </div>
    );
}
export default ComponentExample;    