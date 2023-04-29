import React from 'react'
import { useState } from 'react'
import PersonalInfo from './PersonalInfo'
import SelectPlan from './SelectPlan'
import PickAdd from './PickAdd'
import FinishUp from './FinishUp'
import ThankYou from './ThankYou'

function Home({firstname, setfirstname, }) {

   
    const [page, setPage]= useState(0)

    const PageTitle=['Personal Info', 'Select your plan', 'Pick add-ons', 'Finishing up', '']

    const subTitle = [
        'Please provide your name, email address and phone number',
        'You have the option of monthly or yearly bill',
        'Add-ons help enhance your gaming experience',
        'Double check everything looks okay before confirming'
    ]

    const [formData, setformData]= useState({
        name:'',
        email:'',
        number:'',
        arcade:'',
        advance:'',
        pro:'',
        online:'',
        larger:'',
        custom:'',
    })

    const[Activecheckbox, setActivecheckbox]=useState(false)
    const[check, setcheck]=useState(false)
    const handleChange=(options)=>{
       switch(options){
        case 'online':
        if (check!=='online'){
            setcheck('online')
            return
        }
        else{
            setcheck('')
        }
        break;
        case "larger":
            if (check!=='larger'){
                setcheck('larger')
                return
            }
            else{
                setcheck('')
            }
            break;
        case "custom":
                if (check!=='custom'){
                    setcheck('custom')
                    return
                }
                else{
                    setcheck('')               
            }
            break;
            default:
       }
    }

    
   const [border_name, setBorder_name]= useState({})
   const [border_email, setBorder_email]= useState({})
   const [border_num, setBorder_num]= useState({})
   
   const [mystyle, setMystyle] = useState({
      color: 'red',
      float:'right',
      fontSize: 'small',
      marginTop:'-15px',
})

       const [nextStyle, setnextStyle] = useState({})

        const [mystyle_email, setMystyle_email] = useState({
            color: 'red',
            float:'right',
            fontSize: 'small',
            marginTop:'-15px',
        })

        const [mystyle_num, setMystyle_num] = useState({
            color: 'red',
            float:'right',
            fontSize: 'small',
            marginTop:'-15px',
        })
   
    const [error, setError]= useState(false)
    const [arc, setArc]= useState('$9/mo')
    const [adv, setAdv]= useState('$12/mo')
    const [per, setPer]= useState('$15/mo')
    const [twostyle, setTwostyle] = useState(false)
    const [yrstyle, setyrstyle] = useState(true)

    const [toggle, settoggle] = useState('yearly')
    const handleToggle=(toggle)=>{
        if( toggle==='yearly'){     
          settoggle('monthly')
          setTwostyle(true)
          setyrstyle(false)
          setPer('$90/yr')
          setAdv("$120/yr")
          setArc('$150/yr')
          return
        }
        else{
          settoggle('yearly')
          setTwostyle(false)
          setyrstyle(true)
          setAdv("$15/yr")
        }
       
        }  

        const[activeSelection, setactiveSelection] = useState(1)
        const handleActiveSelect=(selection)=>{
            setactiveSelection(selection)
           }

           const[change, setchange]=useState(false)
           const[ArcadePay, setArcadePay]=useState(9)
           const[OnlinePay, setOnlinePay]=useState(1)
           const[LargerPay, setLargerPay]=useState(2)
           const[year, setyear]=useState('mo')
           const[Yearly, setYearly]=useState('(Monthly)')
           const[total, setTotal]=useState(12)

           const handleFinish=()=>{
            if(change===false){
                setchange(true)
                setYearly('(Yearly)')
                setArcadePay(90)
                setOnlinePay(10)
                setLargerPay(20)
                setyear('yr')
                setTotal(120)
            }
            else{
                setchange(false)
                setYearly('(Monthly)')
                setArcadePay(9)
                setOnlinePay(1)
                setLargerPay(2)
                setyear('mo')
                setTotal(12)
            }
           }

    const PageDisplay =()=>{
        if (page === 0){           
            return <PersonalInfo
             formData={formData} setformData={setformData}
             setPage ={setPage} error={error} setError={setError}
             border_email={border_email} 
             border_name={border_name}
             border_num={border_num}
             mystyle={mystyle}
             mystyle_email={mystyle_email}
             mystyle_num={mystyle_num}
             monthly='monthly'
             yearly='yearly'
             yrstyle={yrstyle}
             
             />

        }
        else if (page === 1){
            return <SelectPlan formData={formData} 
                setformData={setformData}
                handleToggle={handleToggle} 
                toggle={toggle}
                settoggle={settoggle}
                twostyle={twostyle}
                activeSelection={activeSelection}
                setactiveSelection={setactiveSelection}
                handleActiveSelect={handleActiveSelect}
                arc={arc}
                per={per}
                adv={adv}
             />
             
        }
        else if (page === 2){
            return < PickAdd
            check={check}
            handleChange={handleChange}
            formData={formData} 
            setformData={setformData}
            Activecheckbox={Activecheckbox}
            setActivecheckbox={setActivecheckbox}/>
        }
        else if (page ===3){
            return <FinishUp
                    handleFinish={handleFinish}
                    change={change}
                    ArcadePay={ArcadePay}
                    OnlinePay={OnlinePay}
                    LargerPay={LargerPay}
                    year={year}
                    Yearly={Yearly}
                    total={total}
            />
        }
        else if (page === 4){
            return <ThankYou/>
        }

    }
  return (
        <div className='container'>
            <div className='steps'>
                <div className='con'>
                    <div className="smallcon" >
                    <div className="cir 1" style={{
                        width: page === 0 ? '30px' : page === 1,
                        height: page === 0 ? '30px' : page ===1,
                        borderRadius: page === 0 ? '50%' : page === 1, 
                        backgroundColor : page === 0 ? 'hsl(228, 100%, 84%)' : page === 1,                 
                    }}><div className='one circle' >1</div></div>
                    <div className='step onne'>
                        <div className="your">Step 1</div>
                        <div className="info">YOUR INFO</div>
                    </div>
                    </div>
                    <div className="smallcon">
                    <div className="cir 2"  style={{
                        width: page === 1 ? '30px' : page === 2,
                        height: page === 1 ? '30px' : page ===2,
                        borderRadius: page === 1 ? '50%' : page === 2, 
                        backgroundColor : page === 1 ? 'hsl(228, 100%, 84%)' : page === 2,                 
                    }}><div className='one circle'>2</div></div>
                    <div className='step onne'>
                        <div className="your">Step 2</div>
                        <div className="info">SELECT PLAN</div>
                    </div>
                    </div>
                    <div className="smallcon">
                    <div className="cir 3"  style={{
                        width: page === 2 ? '30px' : page === 2,
                        height: page === 2 ? '30px' : page ===2,
                        borderRadius: page === 2 ? '50%' : page === 2, 
                        backgroundColor : page === 2 ? 'hsl(228, 100%, 84%)' : page === 2,                 
                    }}><div className='one circle'>3</div></div>
                    <div className='step onne'>
                        <div className="your">Step 3</div>
                        <div className="info">ADD-ON</div>
                    </div>
                    </div>
                    <div className="smallcon">
                    <div className="cir 4"  style={{
                        width: page === 3 ? '30px': page ===3,
                        height: page === 3? '30px': page === 3, 
                        borderRadius: page === 3? '50%': page === 3,
                        backgroundColor:page ===3? 'hsl(228, 100%, 84%)' :page ===3,
                    }}><div className='one circle'>4</div></div>
                    <div className='step onne'>
                        <div className="your">Step 4</div>
                        <div className="info">SUMMARY</div>
                    </div>
                    </div>
                </div>  
                    <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="304" height="437" fill="none" viewBox="0 0 274 568"><rect width="274" height="568" fill="#483EFF" rx="10"/><mask id="a" width="274" height="568" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="274" height="568" fill="#fff" rx="10"/></mask><g mask="url(#a)"><path fill="#6259FF" fill-rule="evenodd" d="M-34.692 543.101C3.247 632.538 168.767 685.017 211.96 612.52c43.194-72.497-66.099-85.653-104.735-160.569-38.635-74.916-68.657-121.674-124.482-104.607-55.824 17.068-55.375 106.32-17.436 195.757Z" clip-rule="evenodd"/><path fill="#F9818E" fill-rule="evenodd" d="M233.095 601.153c60.679-28.278 92.839-143.526 41.875-171.528-50.965-28.003-57.397 47.579-108.059 75.987-50.662 28.408-82.14 50.207-69.044 88.241 13.096 38.034 74.549 35.578 135.228 7.3Z" clip-rule="evenodd"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="5" d="m165.305 469.097 10.607-10.806M209.461 474.581l-12.506-10.503M187.56 488.991l-6.908 14.798"/><path fill="#FFAF7E" d="M.305 546.891c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67Z"/></g></svg>
                    <img className='img' src="./colorful.jpg" alt="" />
            </div>
            <div className='small-container'>
                <div className='personal'>{PageTitle[page]}</div>
                <div className='subT'>{subTitle[page]}</div>
                <div className='bod'>
                <div>{PageDisplay()}</div>
                </div>
                <button className={PageTitle[page]==='Personal Info'|| PageTitle[page]===''? 'btn-hide':'back'} disabled = {page=== 0} onClick={()=>{
                    setPage((currentPage)=>currentPage - 1)
                }}>
                    Go back
                </button>
              
                <button className={PageTitle[page]===''? 'btn-hide':'next'}style={nextStyle} disabled = {page=== PageTitle.length - 1} onClick={(e)=>{                   
                      e.preventDefault();  
                          
                                 
                         if(formData.name.length===0){
                            setError(true)
                            setPage((currentPage)=>currentPage + 0);
                            
                        }
                        else{
                            setMystyle({
                                display:'none'
                            })
                            setError(false)
                        }
                          if(formData.email.length===0){
                                setError(true)
                                setPage((currentPage)=>currentPage + 0);
                                
                              }
                           else{
                            setMystyle_email({
                                display:'none'
                            })
                            setError(false)
                           }
                             if(formData.number.length!==11){
                                      setError(true)
                                      setPage((currentPage)=>currentPage + 0);
                                      
                                    }
                             else{
                                setMystyle_num({
                                    display:'none'
                                })
                                
                            setError(false)
                             }
                        if(formData.name.length>0 && formData.email.length>0 && formData.number.length>0 ){

                            setPage((currentPage)=>currentPage + 1);
                            setError(false)
                        }                
                        if( PageTitle.length===4 ){
                            console.log(page)
                            setnextStyle({
                                display:'none'
                            })
                            
                        }
                        
                      console.log(formData.name)                  
                }}
               
                >Next Step</button>               
            </div>         
        </div>   
      )
}

export default Home