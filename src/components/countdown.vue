<script lang="ts">
import { 
  defineComponent,
  h,
  ref,
  toRefs,
  computed,
  onUnmounted,
} from 'vue'

export default defineComponent({
  name: 'Countdown',
  props: {
    tag: {
      type: String,
      required: false,
      default: 'span'
    },
    time: {
      type: Number,
      required: true,
      default: 0
    }
  },
  setup(props, { slots }) {
    const { 
      tag,
      time 
    } = toRefs(props)

    /**
     * DES:
     * seconds, minutes, hours and days in milliseconds
     */
    const SECONDS = 1000;
    const MINUTES = 60 * SECONDS
    const HOURS = 60 * MINUTES
    const DAYS = 24 * HOURS

    /**
     * DES:
     * get today's date and time
     */
    const now = ref(Date.now())

    /**
     * DES:
     * find the distance between now and the count down date
     */
    const endTime = ref(Date.now() + time.value)
    const distance = computed(() => endTime.value - now.value)

    /**
     * DES:
     * time calculations for days, hours, minutes and seconds
     */
    const days = computed(() => Math.floor(distance.value / DAYS))
    const hours = computed(() => Math.floor((distance.value % DAYS) / HOURS))
    const minutes = computed(() => Math.floor((distance.value % HOURS) / MINUTES))
    const seconds = computed(() => Math.floor((distance.value % MINUTES) / SECONDS))

    /**
     * DES:
     * update the count down every 1 second
     */
    const interval = setInterval(
      () => {
        now.value = Date.now()
      },
      1000
    )

    onUnmounted(() => {
      clearInterval(interval)
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
        seconds: seconds.value
      })
    )
  } 
})
</script>
