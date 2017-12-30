<template>
  <div class="calendar">
    <h1>Calendar</h1>
    <vue-event-calendar :events="assignments"></vue-event-calendar>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data () {
    return {
      assignments: [{
        date: '2017/11/12',
        title: 'Foo'
      }, {
        date: '2017/12/15',
        title: 'Bar',
        desc: 'description'
        // customClass: 'disabled highlight' // Custom classes to an calendar cell
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @media screen and (min-width: 768px) {
    .__vev_calendar-wrapper .cal-wrapper {
      padding: 10px 50px;
    }
  }
  .today {
    color: #2c87aa;
    font-weight: 700;
  }
  .is-today {
    display: none;
  }
</style>
