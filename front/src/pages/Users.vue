<template>
  <q-page class="content box">
    <div class="text-h6">Users</div>
    <q-btn color="primary" @click="openModal"></q-btn>
    <q-table
      :dense="$q.screen.lt.md"
      class="table"
      :data="data"
      :columns="columns"
      row-key="name"
      :filter="filter"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="id" :props="props">
              {{ props.row.id }}
          </q-td>
          <q-td key="name" :props="props">
              {{ props.row.name }}
          </q-td>
          <q-td key="email" :props="props">
              <div class="text-pre-wrap">{{ props.row.email }}</div>
          </q-td>
          <q-td key="age" :props="props">
            {{ props.row.age }}
          </q-td>
          <q-td key="ops" :props="props">
            <a class="text-blue" style="cursor: pointer; padding: 5px;" @click="edit(props.row.id)"> <q-icon size="md" name="edit"/>
              <q-tooltip :delay="1000" :offset="[0, 10]">editar</q-tooltip>
            </a>
            <a class="text-red" style="cursor: pointer; padding: 5px;" @click="del(props.row.id)"> <q-icon size="md" name="delete"/>
              <q-tooltip :delay="1000" :offset="[0, 10]">eliminar</q-tooltip>
            </a>
          </q-td>
        </q-tr>
      </template>
      <template v-slot:top-right>
        <q-input dense color="grey-3" bg-color="white" label-color="primary" filled debounce="300" v-model="filter" placeholder="Buscar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
    <q-dialog
      v-model="modal"
    >
      <q-card class="column full-height" style="width: 300px">
        <q-card-section>
          <div class="text-h6">User</div>
        </q-card-section>

        <q-separator></q-separator>
        <br>
        <q-card-section class="col q-pt-none">
          <q-input color="grey-3" bg-color="white" label-color="primary" filled v-model="user.name" label="Name" required :rules="[val => !!val || 'Este campo es necesario']">
            <template v-slot:append>
              <q-icon name="account_circle" color="primary" />
            </template>
          </q-input>
          <q-input color="grey-3" bg-color="white" label-color="primary" filled v-model="user.email" label="Email" required :rules="[val => !!val || 'Este campo es necesario']">
            <template v-slot:append>
              <q-icon name="mail" color="primary" />
            </template>
          </q-input>
          <q-input color="grey-3" bg-color="white" label-color="primary" filled v-model="user.age" label="Age" required :rules="[val => !!val || 'Este campo es necesario']">
            <template v-slot:append>
              <q-icon name="account_circle" color="primary" />
            </template>
          </q-input>
          <q-input color="grey-3" bg-color="white" label-color="primary" filled v-model="user.address" label="Address" required :rules="[val => !!val || 'Este campo es necesario']">
            <template v-slot:append>
              <q-icon name="account_circle" color="primary" />
            </template>
          </q-input>
          <q-input color="grey-3" bg-color="white" label-color="primary" v-model="user.password" filled :type="isPwd ? 'password' : 'text'" label="Clave" required :rules="[val => !!val || 'Este campo es necesario']">
            <template v-slot:append>
              <q-icon color="primary" :name="isPwd ? 'visibility_off' : 'visibility'" @click="isPwd = !isPwd"/>
            </template>
          </q-input>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" @click="saveUser()" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import UserService from '../services/UserService'

export default {
  name: 'PageIndex',
  data () {
    return {
      user: {
        id: '',
        name: '',
        email: '',
        age: '',
        address: ''
      },
      filter: '',
      columns: [
        { name: 'id', align: 'center', label: 'id', field: 'id', sortable: true },
        { name: 'name', align: 'center', label: 'Nombre', field: 'name', sortable: true },
        { name: 'email', align: 'center', label: 'Email', field: 'email', sortable: true },
        { name: 'rank', align: 'center', label: 'Tipo', field: 'rank', sortable: true },
        { name: 'ops', align: 'center', label: 'Opciones', field: 'ops', sortable: true }
      ],
      data: [],
      modal: false,
      isPwd: true
    }
  },
  mounted () {
    this.getUsers()
  },
  methods: {
    async getUsers () {
      try {
        const request = await UserService.get({})
        this.data = request.data.users
      } catch (error) {
        console.log(error)
      }
    },
    async saveUser () {
      try {
        if (this.user.id !== '') {
        // edit mode
          await UserService.update(this.user)
        } else {
          await UserService.create(this.user)
        }
      } catch (error) {
        console.log(error)
      }
      this.getUsers()
    },
    openModal () {
      this.modal = true
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  padding: 10px;
  background: $grey-1;
}
.box {
    box-shadow: 0 0px 0px 0 rgba(0,0,0,.14), 0 0px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.3);
}
</style>