# All-about-Hooks
 
 ### _useState_ : 
  - We call the useState Hook in our component , with the name of the variable and its initial state as an argument :
  
  ![capture1](https://user-images.githubusercontent.com/87330491/165967627-fdaa8e1b-e212-42d2-bcdb-2204f4045cb6.png)
  
  - To change the status of the variable we use the setter function, inside the event click :
 
 ![Capture2](https://user-images.githubusercontent.com/87330491/165967750-5aeb7354-2d99-4cb1-96d0-c70a51dec0d2.PNG)

  - Whatever the value of the variables, it will be assigned to the attributes :

  ![Capture3](https://user-images.githubusercontent.com/87330491/165967799-911213c0-4507-42e9-a2ec-58431f922468.PNG)
  

 ### _useEffect_ : 
 
  - The first argument passed to useEffect is a function called effect  and the second argument is an array of dependencies , When we use this hook , the change of the text button color causes the change of the h1 color : 
  
  ![Capture4](https://user-images.githubusercontent.com/87330491/165969295-0d968665-3b00-4c93-a99d-6d890c18a8f0.PNG)

 ### _useReducer_ :
 
   - The useReducer hook is used for complex state manipulations and state transitions,useReducer is a React hook function that accepts a reducer function, and an initial state :
   
   ![Capture5](https://user-images.githubusercontent.com/87330491/165971399-3eba8931-d631-418e-aba8-25f1cf3fb7b1.PNG)
   
  - useReducer args : 
  
   ![Capture6](https://user-images.githubusercontent.com/87330491/165972081-6bb31b94-0aa1-4fc7-97c3-cea57f772230.PNG)
   
  - Calling variables and dispatch : 
  
  ![Capture8](https://user-images.githubusercontent.com/87330491/165972504-b9e605bf-f3f1-4624-bfa5-55858cf12d90.PNG)
  
  ![Capture7](https://user-images.githubusercontent.com/87330491/165972513-36fcbc7b-a4ed-42bb-a9df-c750661b5b21.PNG)
  
   ### _useContext_ : 

   - It allows to share data between components, but not only between parents and children, we create the context : 
   
   ![Capture9](https://user-images.githubusercontent.com/87330491/165975234-dbfa2b1e-d0d9-4fbb-a293-d27761b8ca2d.PNG)
   
   - retrieve the values with useContext : 
    
   ![Capture10](https://user-images.githubusercontent.com/87330491/165975514-653fe95a-608d-4806-b50d-2ce4455c0f95.PNG)
   
   - Providers: defining the value of context :
   
   ![Capture11](https://user-images.githubusercontent.com/87330491/165975727-8302cd66-cba5-4790-94bb-54e8ca1f1fc8.PNG)

    
