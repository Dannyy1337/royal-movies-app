<template>
  <div class="modal-wrapper" v-show="show">
    <div class="modal">
      <div class="modal-header">
        <span>
          <i @click="$emit('close')" class="material-icons">close</i>
        </span>
      </div>
      <div class="modal-content">
        <div class="enter">
          <h2>Войти</h2>
          <form>
            <label for="login">
              <input
                @blur="$v.formReg.login.$touch()"
                id="login"
                v-model.trim="$v.formReg.login.$model"
                type="text"
                placeholder="Login"
                :class="status(this.$v.formReg.login)"
              />
              <div v-if="!$v.formReg.login.minLength" class="invalidRed">
                Не меньше 5-ти символов
              </div>
            </label>
            <label for="password">
              <input
                @blur="$v.formReg.password.$touch()"
                :class="status(this.$v.formReg.password)"
                id="password"
                v-model="formReg.password"
                type="password"
                placeholder="Password"
              />
              <div v-if="!$v.formReg.password.minLength" class="invalidRed">
                Не меньше 6-ти символов
              </div>
            </label>
          </form>

          <button class="btn">Войти</button>
        </div>
      </div>
    </div>
  </div>
</template>

 <script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  props: ["show"],
  data() {
    return {
      formReg: {
        login: "",
        password: "",
      },
    };
  },
  validations: {
    formReg: {
      login: {
        required,
        minLength: minLength(5),
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },

  computed: {},
  methods: {
    status(validator) {
      return {
        "is-invalid": validator.$error,
      };
    },
  },
  created() {
    console.log(this.$v.$dirty);
  },
};
</script>

<style lang='scss'>
.modal-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  margin-right: 10px;
  z-index: 20;
  .modal {
    padding: 16px;
    position: fixed;
    top: 50px;
    box-shadow: 0 0 17px 0 #e7e7e7;
    z-index: 10;
    width: 400px;
    background: rgb(44, 44, 44, 0.98);
    border-radius: 10px !important;
    min-width: 300px;
    width: 220px;
    font-family: Arial, Helvetica, sans-serif !important;
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      & button {
        min-width: 20px;
      }
    }
    &-content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-header {
      justify-content: flex-end;
    }
  }

  .modal-content {
    font-family: Arial, Helvetica, sans-serif !important;
    min-height: 30%;
    background: rgb(44, 44, 44, 0.98);
  }

  .enter {
    &.hidden {
      display: none !important;
    }
    & h2 {
      color: white;
      float: right;
    }
    & input {
      background: transparent;
      border: 1px solid white;
      border-radius: 10px;
      margin: 15px 0;
      height: 40px;
      width: 268px;
      font-size: 20px;
      padding: 0 6.5px;
      &:focus {
        background: rgba(0, 0, 0, 0.2);
        color: whitesmoke;
      }
      &:hover {
        border: 1px solid rgb(128, 128, 128);
        transition: 0.25s ease;
      }
    }

    & .btn {
      min-width: 120px !important;
      float: left;
      &:last-child {
        float: right;
      }
    }
  }

  .is-invalid {
    border: 1px solid red !important;
  }

  .invalidRed {
    color: red !important;
  }
}
</style>