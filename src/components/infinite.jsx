const handleScroll = () => {
   if (
     window.innerHeight + document.documentElement.scrollTop <
     document.documentElement.offsetHeight-350
   )
     return;
   setorig([...orig,...orig]);
   setList(orig);
 };

 useEffect(() => {
   window.addEventListener("scroll", handleScroll);
   return () => {
     window.removeEventListener("scroll", handleScroll);
   };
 }, [orig]);
