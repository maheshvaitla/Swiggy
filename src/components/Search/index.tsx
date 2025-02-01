import React, { useState } from 'react'


type SearchProp = {
     searchFunction: (searchData: string) => void;

}

const index = (props: SearchProp) => {
    const { searchFunction }  = props;
    const [search, setSearch] = useState("");



    const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
        const data = e.target.value;
        setSearch(data);
        searchFunction(data)
    }

  return (

    <label className="input m-5">
      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
      <input type="search" className="grow"  placeholder="Search Resturant" value={search}
      onChange={handleChange} />
    </label>
  )
}

export default index