import React from "react";
import { useRef,useState } from "react";
import useHttp from "../../hooks/useHttp"
import { API_URL } from "../../helpers/API";
import { useHistory } from "react-router-dom";
const Signup = () => {
  const history = useHistory()
  const {sendRequest} = useHttp()
  const firstNameInputRef = useRef(null);
  const lastNameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const passwordConfirmInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const [ptCheckValue,setPtCheckValue] = useState(true);
  const [cusCheckValue, setCusCheckValue] = useState(false);
  const onChangeCusValue = (event)=>{
    setCusCheckValue(!cusCheckValue)
    setPtCheckValue(!ptCheckValue)
  }
  const onChangeValuePT = (event)=>{
    setPtCheckValue(!ptCheckValue)
    setCusCheckValue(!cusCheckValue)
  }
  const onSubmitHandler = (event)=>{
    console.log("console")
    event.preventDefault();
    console.log(ptCheckValue,cusCheckValue)
    const req = {
      method: 'POST',
      url: `${API_URL}/auth/register`,
      data: {
        name: firstNameInputRef.current.value,
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
        phone: '112',
        gender: 0,
        userType: cusCheckValue? 0 :1, 
      }
    }
    const handleResponseData=(res) =>{
      if(res.success && res.data.userType===0){
        history.push("/customer/fill")
      }
      else if(res.success && res.data.userType===1){
        history.push("/pt/fill")
      }
    }
    sendRequest(req,handleResponseData);
  }
  return (
    <section className="h-full gradient-form md:h-screen bg-gray-100">
      <div className="container px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-6 md:mx-6">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="/logo.png"
                        alt="logo"
                      />
                      <h4 className="text-xl font-semibold mt-1 mb-6 pb-1 font-bold">
                        GYM NET
                      </h4>
                    </div>
                    <form onSubmit={onSubmitHandler}>
                      <p className="mb-4">Please sign up an account.</p>
                      <div className="mb-4">
                        <input
                          ref={firstNameInputRef}
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="FirstName"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          ref={lastNameInputRef}
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Lastname"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="email"
                          ref={emailInputRef}
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Email"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          ref={passwordInputRef}
                          type="password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Password"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                        ref={passwordConfirmInputRef}
                          type="password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Confirm Password"
                        />
                      </div>
                      <div class="flex justify-start">
                        <label htmlFor="" className="w-2/5">
                          You are:
                        </label>
                        <div className="flex justify-around w-3/5">
                          <div class="form-check">
                            <input
                              class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              checked = {ptCheckValue}
                              onChange={onChangeValuePT}
                            />
                            <label
                              class="form-check-label inline-block text-gray-800"
                              for="flexRadioDefault1"
                            >
                              Personal Trainer(PT)
                            </label>
                          </div>
                          <div class="form-check ml-5">
                            <input
                              class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                              checked={cusCheckValue}
                              onChange={onChangeCusValue}
                            />
                            <label
                              class="form-check-label inline-block text-gray-800"
                              for="flexRadioDefault2"
                            >
                              Customer
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="text-right pt-5">
                        <button
                          type="submit"
                          
                          className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full"
                          style={{
                            background:
                              "linear-gradient(to right,#ec7807,#ec7807,#ec7807,#ec7807)",
                          }}
                        >
                          Sign up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="lg:w-6/12 flex flex-column items-end justify-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-gray-500">
                  <img
                    className="object-cover h-full"
                    src="model.png"
                    alt="hinhmau"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
