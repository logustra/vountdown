<script lang="ts">
import {
  computed,
  defineComponent,
  h,
  onMounted,
  ref,
  toRefs,
  watch,
} from 'vue-demi'

export default defineComponent({
  name: 'Vountdown',
  props: {
    auto: {
      type: Boolean,
      required: false,
      default: true,
    },
    tag: {
      type: String,
      required: false,
      default: 'span',
    },
    time: {
      type: Number,
      required: false,
      default: 5000,
    },
  },
  setup(props, { emit, slots }) {
    const {
      auto,
      tag,
      time,
    } = toRefs(props)

    /**
     * DES:
     * seconds, minutes, hours and days in milliseconds
     */
    const SECONDS = 1000
    const MINUTES = 60 * SECONDS
    const HOURS = 60 * MINUTES
    const DAYS = 24 * HOURS

    /**
     * DES:
     * event listeners
     */
    const EVENT_START = 'start'
    const EVENT_STOP = 'stop'
    const EVENT_DONE = 'done'

    const isStart = ref(false)
    const isStop = ref(false)
    const isDone = ref(false)

    /**
     * DES:
     * get today's date and time
     */
    const currentTime = ref(Date.now())
    const startEndTime = ref(Date.now())

    /**
     * DES:
     * find the distance between now and the count down date
     */
    const endTime = computed(() => {
      let result = time.value

      /**
       * DES:
       * use this formula when time is less than 1 day
       */
      if (time.value < startEndTime.value)
        result = time.value + startEndTime.value

      return result
    })
    const distance = computed(() => endTime.value - currentTime.value)

    /**
     * DES:
     * time calculations for days, hours, minutes and seconds
     */
    const days = computed(() => Math.floor(distance.value / DAYS))
    const hours = computed(() => Math.floor((distance.value % DAYS) / HOURS))
    const minutes = computed(() => Math.floor((distance.value % HOURS) / MINUTES))
    const seconds = computed(() => Math.floor((distance.value % MINUTES) / SECONDS))

    function timeout(milliseconds: number) {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    function onStart() {
      if (auto.value) {
        currentTime.value = Date.now()
        startEndTime.value = Date.now() - 1

        /**
         * DES:
         * fires immediately when the countdown starts
         */
        isStart.value = true
        emit(EVENT_START, isStart.value)
      }
    }

    async function onUpdateCurrentTime() {
      if (auto.value) {
        if (distance.value > SECONDS) {
          await timeout (SECONDS)
          currentTime.value = Date.now()
        }
        else {
          /**
           * DES:
           * fires when the countdown has stopped
           */
          isDone.value = true
          emit(EVENT_DONE, isDone.value)
        }
      }
      else {
        /**
         * DES:
         * fires when the countdown has endded
         */
        isStart.value = false
        isStop.value = true
        emit(EVENT_STOP, isStop.value)
      }
    }

    /**
     * DES:
     * update the count down every 1 second
     */
    watch(
      () => currentTime.value,
      () => {
        onUpdateCurrentTime()
      },
    )

    /**
     * DES:
     * fires immediately when the props auto changes
     */
    watch(
      () => auto.value,
      () => {
        onStart()
      },
    )

    onMounted(() => {
      onStart()
    })

    /**
     * DESC:
     * passing html tag as string
     * passing props as null
     * slots object being treated as props
     */
    return () => h(
      tag.value,
      null,
      slots.default && slots.default({
        days: days.value,
        hours: hours.value,
        minutes: minutes.value,
        seconds: seconds.value,
        isStart: isStart.value,
        isStop: isStop.value,
        isDone: isDone.value,
      }),
    )
  },
})
</script>
