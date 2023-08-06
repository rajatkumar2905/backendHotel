import mongoose from "mongoose";

const schema = new mongoose.Schema({
 shippingInfo:  {
 hNo: {
 type: String,
 required: true,
 },
 village: {
 type: String,
 required: true,
 },
 tehsil: {
 type: String,
 required: true,
 },
 pincode: {
 type: Number,
 required: true,
 },
 phoneno: {
 type: Number,
 required: true,
 },
},

 orderItems:{
   PIZZA : {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  MILKSHAKE : {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  OREOSHAKE : {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  KIKATSHAKE : {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  CHICKENRARA : {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  CHILLYCHICKEN : {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  MUTTONROGANJOSH : {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
      TANDOORICHICKEN: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
      KADHIMUTTON: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
      CHICKENKADHI: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
      CHICKENNOODLE: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
      AFGANICHICKEN: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
      BUTTERCHICKEN: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
      VEGNODDLE: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
      PANEERNOODLE: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  DRYMANCHURIAN: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  CHURYMANCHURIAN: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  CHILLYPANEER: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  FENCEFRY: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  LOADSEDFRY: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  CHEESEFRY: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  CHICKENNOODLE: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  MUTTARPANEER: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  KADHAIPANEER: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  PANEERBUTTERMASALA: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  SHAHIPANEER: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  DALMAKNI: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  YELLOWDALTARKA: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  STUFFEDPARTHA: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  TANDORIROTI: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  BUTTERNAAN: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  VEGBIRYANI: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  TANDORIROTI: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  GULABJAMUN: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  ICECREAM: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  KHEER: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
 
  VEGTOWERBUGGER: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  CHEESEBUGGER: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  ALOOTIKKIBUGGER: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  HIMSPECIALBUGGER: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  VEGCHOPSUY: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
  SPRINGROLLS: {
      price: {
          type: Number,
          required: true,

      },
      quantity:{
          type:Number,
          required:true,
      },
  },
 
 },
 user:{
    type: mongoose.Schema.ObjectId,
    ref:"User",
    required: true,
 },

 paymentMethod:{
    type: "String",
    enum:["COD","TAKEAWAY","VISITTOHOTEL"],
    default:"COD",
    
 },

//  paymentInfo:{
//     type: mongoose.Schema.ObjectId,
//     ref:"Payment",
//     required: true,
//  },
 paidAt: Date,

 itemsPrice:{
    type:Number,
    default: 0,
 },
 taxPrice:{
    type:Number,
    default: 0,
 },
 shippingCharges:{
    type:Number,
    default: 0,
 },
 totalAmnout:{
    type:Number,
    default: 0,
 },

 orderStatus: {
   type: String,
   enum: ["Preparing", "Shipped", "Delivered"],
   default: "Preparing",
 },
 
 deliverdAT: Date,
 createdAt: {
    type:Date,
    default:Date.now,
 },
  });


 export const Order = mongoose.model("Order", schema)
