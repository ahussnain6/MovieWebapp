import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import { airing, mov, nowwatch, poptv, popular, topmovie, toptv, upcoming } from "../assets/ApiUrl";
export const STATUS = Object.freeze({
  IDLE :"IDLE",
  ERROR:"ERROR",
  LOADING:"LOADING"
})
const initialState = {
  status : STATUS.IDLE,  
  data:[],
  datapo : [],
    datanow:[],
    datatop:[],
    datanup:[],
    tvtop:[],
    poptv:[],
    details:[],
    airtv:[],
    similar:[]
,trailer:[],
list:[]
}
const MovieSlice = createSlice({
    name:"movie",
   initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchMoviespopular.pending,(state,action)=>{
            state.status = STATUS.LOADING;   
        })
        .addCase(fetchMoviespopular.fulfilled,(state,action)=>{
          state.datapo = action.payload;
         state.status = STATUS.IDLE;
        })
        .addCase(fetchMoviespopular.rejected,(state,action)=>{
         state.status = STATUS.ERROR;
        })
        .addCase(fetchMoviesnow.pending,(state,action)=>{
          state.status = STATUS.LOADING;   
      })
      .addCase(fetchMoviesnow.fulfilled,(state,action)=>{
        state.datanow = action.payload;
       state.status = STATUS.IDLE;
      })
      .addCase(fetchMoviesnow.rejected,(state,action)=>{
       state.status = STATUS.ERROR;
      })
      .addCase(fetchMoviestop.pending,(state,action)=>{
        state.status = STATUS.LOADING;   
    })
    .addCase(fetchMoviestop.fulfilled,(state,action)=>{
      state.datatop = action.payload;
     state.status = STATUS.IDLE;
    })
    .addCase(fetchMoviestop.rejected,(state,action)=>{
     state.status = STATUS.ERROR;
    })
    .addCase(fetchMoviesup.pending,(state,action)=>{
      state.status = STATUS.LOADING;   
  })
  .addCase(fetchMoviesup.fulfilled,(state,action)=>{
    state.datanup = action.payload;
   state.status = STATUS.IDLE;
  })
  .addCase(fetchMoviesup.rejected,(state,action)=>{
   state.status = STATUS.ERROR;
  })
  .addCase(fetchtvtop.pending,(state,action)=>{
    state.status = STATUS.LOADING;   
})
.addCase(fetchtvtop.fulfilled,(state,action)=>{
  state.tvtop = action.payload;
 state.status = STATUS.IDLE;
})
.addCase(fetchtvtop.rejected,(state,action)=>{
 state.status = STATUS.ERROR;
})
.addCase(fetchpoptv.pending,(state,action)=>{
  state.status = STATUS.LOADING;   
})
.addCase(fetchpoptv.fulfilled,(state,action)=>{
state.poptv = action.payload;
state.status = STATUS.IDLE;
})
.addCase(fetchpoptv.rejected,(state,action)=>{
state.status = STATUS.ERROR;
})
.addCase(fetchairing.pending,(state,action)=>{
  state.status = STATUS.LOADING;   
})
.addCase(fetchairing.fulfilled,(state,action)=>{
state.airtv = action.payload;
state.status = STATUS.IDLE;
})
.addCase(fetchairing.rejected,(state,action)=>{
state.status = STATUS.ERROR;
})
.addCase(fetchdetails.pending,(state,action)=>{
  state.status = STATUS.LOADING;   
})
.addCase(fetchdetails.fulfilled,(state,action)=>{
state.details = action.payload;
state.status = STATUS.IDLE;
})
.addCase(fetchdetails.rejected,(state,action)=>{
state.status = STATUS.ERROR;
})
.addCase(fetchSimilar.pending,(state,action)=>{
  state.status = STATUS.LOADING;   
})
.addCase(fetchSimilar.fulfilled,(state,action)=>{
state.similar = action.payload;
state.status = STATUS.IDLE;
})
.addCase(fetchSimilar.rejected,(state,action)=>{
state.status = STATUS.ERROR;
})
.addCase(fetchtrailer.pending,(state,action)=>{
  state.status = STATUS.LOADING;   
})
.addCase(fetchtrailer.fulfilled,(state,action)=>{
state.trailer = action.payload;
state.status = STATUS.IDLE;
})
.addCase(fetchtrailer.rejected,(state,action)=>{
state.status = STATUS.ERROR;
})
.addCase(fetchlist.pending,(state,action)=>{
  state.status = STATUS.LOADING;   
})
.addCase(fetchlist.fulfilled,(state,action)=>{
state.list = action.payload;
state.status = STATUS.IDLE;
})
.addCase(fetchlist.rejected,(state,action)=>{
state.status = STATUS.ERROR;})  }   });
export default MovieSlice.reducer;
export const fetchMoviespopular=  createAsyncThunk("pmovies/get", async()=>{
  const res = await axios.get(`${popular}`);
  const response = await res.json();
  return response.results;
});
export const fetchMoviesnow=  createAsyncThunk("nmovies/get", async()=>{
const res = await fetch(`${nowwatch}`);
  const response = await res.json();
  return response.results;
});
export const fetchMoviestop = createAsyncThunk("topmovies/get", async()=>{
  const res = await fetch(`${topmovie}`); 
  const response = await res.json();
  return response.results;
}) 
export const fetchMoviesup = createAsyncThunk("upmovies/get", async()=>{
  const res = await fetch(`${upcoming}`);
  const response = await res.json();
  return response.results;
}) 
export const fetchtvtop = createAsyncThunk("toptv/get", async()=>{
  const res = await fetch(`${toptv}`);
  const response = await res.json();
  return response.results;
}) 
export const fetchpoptv = createAsyncThunk("poptv/get", async()=>{
  const res = await fetch(`${poptv}`);
  const response = await res.json();
  return response.results;
}) 
export const fetchairing = createAsyncThunk("airtv/get", async()=>{
  const res = await fetch(`${airing}`);
  const response = await res.json();
  return response.results;
}) 
export const fetchdetails = createAsyncThunk("get/details",async(id)=>{
  const res = await fetch(`${mov}/movie/${id}?api_key=${import.meta.env.REACT_APP_KEY}`);
  const response = await res.json();
  return response;
})
export const fetchSimilar = createAsyncThunk("get/similar",async(id)=>{
  const res = await fetch(`${mov}/movie/${id}/recommendations?api_key=${import.meta.env.REACT_APP_KEY}`);
 const response = await res.json()
return response.results;
})
export const fetchtrailer = createAsyncThunk("get/trailer",async(id)=>{
  const res = await fetch(`${mov}/movie/${id}/videos?api_key=${import.meta.env.REACT_APP_KEY}`);
  const response = await res.json();
  return response.results;
})
export const fetchlist = createAsyncThunk("get/list",async(q)=>{
  const response = await fetch(`${mov}/search/movie?api_key=${import.meta.env.REACT_APP_KEY}&query=${q}`)
   const res = await response.json();
   return res.results;
 })