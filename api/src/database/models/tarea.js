import mongoose, {Schema} from "mongoose";

const tareaSchema = new Schema({
  nombreTarea: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    unique: true
  },
  descripcion: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 100
  },
  }
);

const Tarea = mongoose.model('Tarea', tareaSchema);

export default Tarea;