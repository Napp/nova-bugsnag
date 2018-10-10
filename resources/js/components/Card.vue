<template>
    <card class="px-6 py-4 relative">
        <h1 class="mb-4 text-base text-80 font-bold">Critical Errors</h1>

        <div v-if="loading" class="rounded-lg flex items-center justify-center absolute pin z-50 bg-white">
            <loader class="text-60"/>
        </div>

        <div v-if="!loading && !data.length">
            <p>I have no data to display</p>
        </div>

        <div v-if="!loading && data.length" class="errors flex">
            <div v-for="error in data" class="error-item w-1/4 pr-2 relative">

                <h2 class="mb-1">{{ error.events }} <span class="font-normal text-base">events</span></h2>

                <div class="class-name mb-1 truncate font-mono text-xs">{{ error.error_class }}</div>
                <p class="text-sm leading-tight">{{ error.users }} Affected users</p>
                <p class="text-sm leading-tight text-80">Last seen {{ formatDate(error.last_seen) }}</p>

                <div class="error-details absolute bg-white shadow-lg">
                    <h5 class="px-3 py-2 bg-40 text-danger font-mono font-normal break-words">{{ error.error_class }}</h5>
                    <div class="px-3 py-2">
                        <p class="font-bold text-sm pb-2 break-words">{{ error.context }}</p>
                        <p class="font-mono text-sm break-words">{{ error.message }}</p>
                    </div>
                    <div class="px-3 py-2 text-center" v-if="error.browser_url">
                        <a class="btn btn-default btn-primary" :href="error.browser_url" target="_blank">Go to event</a>
                    </div>
                </div>
            </div>
        </div>
    </card>
</template>

<script>
export default {
    props: [
        'card',

        // The following props are only available on resource detail cards...
        // 'resource',
        // 'resourceId',
        // 'resourceName',
    ],
    data() {
        return {
            loading: false,
            data: [],
        }
    },

    mounted() {
        this.fetchData();
        console.log(this.card);
    },

    methods: {
        fetchData() {
            this.loading = true;
            Nova.request().get('/nova-vendor/nova-bugsnag/critical-errors').then(({ data }) => {
                this.loading = false;
                this.data = data;
                console.log(data);

            }).catch(error => {
                this.loading = false
                console.log('ERROR');
            })
        },

        formatDate(date) {
            return moment(date).fromNow();
        }
    }
}
</script>
<style lang="scss" scoped>
    .error-item {
        .error-details {
            display: none;
            width: 24rem;
            top:0;
            left:0;
            z-index: 1;
        }

        &:hover .error-details {
            display: block;
        }

        &:nth-last-child(-n+2) .error-details{
            left: auto;
            right: 0;
        }
    }
</style>