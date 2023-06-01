import './App.css';
import Nav from './Nav';
import TextForm from './noncommoncomponents/TextForm';

// let temp_name = `<b>Reference 1.1</b>`; // It will consider as HTML | input can be HTML tha is why
// let site_name = `<b>Web${temp_name}</b>`;
let temp_name = `Reference`;
let site_name = `Web ${temp_name}`;
let menus = [{'menu_name':'Home','href_link':'/','active':true},
             {'menu_name':'About','href_link':'/','active':false},
             {'menu_name':'Contact Us','href_link':'/','active':false},
];
function App() {
  return (
    <>
      <Nav site_name={site_name} menus={menus}/>
      <div className='container my-4'>
      <TextForm user_name_lable="Enter User Name" user_address_lable="Enter User Address"/>
      </div>
    </>
  );
}

export default App;
