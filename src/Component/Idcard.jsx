
const Idcard = () => {

  return (
    <div className="w-full h-screen flex justify-center items-center">

        <div className='flex justify-center items-center gap-1 '>
            <div className="flex flex-col items-center">
            <div className='w-[205px] h-[335px] bg-black rounded-lg mt-4 overflow-hidden border-2 border-black'>
                <div className='w-full h-[70px] bg-[#7329b4] flex flex-col justify-center items-center'>
                <img className='w-[30px] h-[30px] mt-2' src="../public/logo.png" alt="logo" />
                <p className='text-[11px] text-white font-bold text-center'>RANGPUR POLYTECHNIC INSTITUTE  RANGPUR</p>

                </div>
                <div className='flex justify-center items-center'>
                <div className='w-[30px] h-[266px] bg-red-500 flex justify-center items-center '><p className=' text-[20px] font-bold  text-white rotate-[-90deg] whitespace-pre'>Electrical  Technology</p></div>
                <div className='w-[190px] h-[266px] bg-white flex flex-col items-center'>

                    <h2 className='text-[17px] font-semibold px-[10px] bg-red-500 rounded-lg text-white mt-1'>STUDENT ID CARD</h2>
                    <img className='w-[40%] border-2 border-black mt-1' src="../public/owner.jpg"alt="ower photo" />
                    <h2 className=' text-[15px] font-bold text-green-700'>MD. SAROWER JAHAN</h2>
                    <p className='text-[12px] font-bold whitespace-pre'>
                    Roll No           :    714592
                        <br />
                    Reg. No          :    1502248557
                    <br />
                    Session           :    2022-23</p>

                    <div className='flex gap-4'>
                    <div className='mt-4'>
                    <p className='text-[14px] text-white p-1 bg-[#7329b4] rounded-lg rotate-[-32deg]  font-bold  mt-2'>2nd Shift</p>
                    </div>
                    <div className='flex flex-col justify-center items-center '>
                        <img className='w-[40px] h-[40px]' src="../public/sign.jpg" alt="sign" />
                        <p className='text-[10px] font-semibold'> Principal Signature</p>
                    </div>
                    </div>
            
                </div>
                </div>
            </div>
         </div>


        <div className="">
            <div className=' flex flex-col items-center w-[205px] h-[335px] rounded-lg mt-4 overflow-hidden border-2 border-black'>
            <header className='w-full h-[4%] bg-red-500'></header>
            <div className='mt-[10px] w-[90%] h-[10%] bg-green-800 rounded-lg'>
                <p className='text-[12px] text-white font-bold text-center pt-[4px]'>This Card is not transferable</p>
            </div>

            <div className='mt-[4px] w-[45%] h-[4%] bg-red-500 rounded-lg'>
                <p className='text-[8px] text-white font-bold text-center'>Personal Information</p>
            </div>

            <div className='text-[10px] font-bold'>
                <p className='whitespace-pre'><span className='text-[#01cc4f] font-bold'>Father's Name</span>   : MD. HAIDAR ALI</p>
                <p className='whitespace-pre'><span className='text-[#01cc4f] font-bold'>Mohter's Name </span>: MST. SUBARNA BEGUM</p>
                <p className='whitespace-pre'><span className='text-[#01cc4f] font-bold'>Contact No</span>        : 01828782414</p>
                <p className='whitespace-pre text-red-500'>Blood group      : O(+ve)</p>
            </div> 

            <div className='mt-[5px] w-[90%] h-[10%] bg-[#7329b4] rounded-lg'>
                <p className='text-[14px] text-white font-bold text-center pt-1 '>If Found Please Return to</p>
            </div>

            <div className='flex flex-col justify-center items-center text-[9px] font-bold'>
                <p className='text-pink-600'>Principal</p>
                <p>Rangpur Polytechnic Institute <br /> Jummapara, Rangpur-5400</p>
                <img className='w-[30%]' src="./public/Barcode.png" alt="bercode" />
                <p>📞 02588809188</p>
                <div className='flex justify-center items-center gap-4 '>
                    <p className='w-[45%] flex justify-center  items-center text-[8px]'> <img className='w-[10%]' src="./public/internet.svg" alt="" /> rangpur.polytech.gov.bd</p>
                    <p className='w-[40%] flex justify-center items-center text-[8px]'> <img className='w-[10%]' src="./public/mail.svg" alt="" />rpi_16058@yahoo.com</p>
                </div>
            </div>

            <footer className='w-full h-[8%] bg-red-500 mt-1.5'>
                <p className='text-[12px] font-semibold text-center pt-1 text-white'>Valid up to: 30 September, 2027</p>
                </footer>
            </div>
        </div>
    </div>

</div>
  )
}

export default Idcard