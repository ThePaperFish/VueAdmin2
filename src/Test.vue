<template>
  <div id="Test">
    <p>{{data}}</p>
    <ul>
      <li v-for="item in items" :item = "item" :key = "item.message">
        {{ item.message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'Test',
  data: function() {
    return{
    hihi:"hihfd",
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
    }
  }
}
</script>
