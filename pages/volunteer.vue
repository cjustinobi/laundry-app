<template>
    <div class="volunteer">
        <h1>Water Relief Volunteering Opportunities</h1>
        <p>
            Water Relief Africa is an international not-for-profit making
            portable water and clean environment normal for everyone, everywhere. If you’re interested
            in volunteering at Water Relief Africa, browse the vacancies we have available below.
        </p>

        <p>
            From helping out in one of the Africa offices to joining a local group,
            becoming a speaker or cheering on our brilliant marathon runners,
            Water Relief Africa have a whole host of volunteering opportunities available for you.
        </p>
        <p>
            At Water Relief Africa, volunteers are at the heart of what we do. From
            joining a local group, becoming a speaker or helping out at an event,
            we have a whole host of opportunities available for you. Whatever
            you decide to do, you’ll be joining a global network
            committed to one thing: making portable water available
            and clean environment normal for everyone, everywhere.
        </p>
        <button class="btn vol-btn primary-bck" @click.prevent="volunteer">Volunteer</button>
        <div v-if="showForm" class="backdrop">
            <div class="form" v-if="showForm">
                <form>
                    <label for="fullname" class="sr-only">fullname</label>
                    <input v-model="fullname" id="fullname" placeholder="John Doe">

                    <label for="email" class="sr-only">email</label>
                    <input v-model="email" id="email" type="email" placeholder="johndoe@example.com">

                    <label for="phone" class="sr-only">phone</label>
                    <input v-model="phone" id="phone" placeholder="08064152319">

                    <label for="volunteer" class="sr-only">volunteer</label>
                    <select v-model="volunteerOption" id="volunteer">
                        <option>Volunteer Options</option>
                        <option value="Event">Event Volunteering</option>
                        <option value="Festival">Festival Volunteering</option>
                        <option value="Speaker">Speaker Network</option>
                        <option value="University">University Volunteering</option>
                    </select>

                    <button class="btn vol-cancel" @click.prevent="volunteer">Cancel</button>
                    <button class="btn vol-submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                showForm: false,
                volunteerOption: 'Volunteer Options',
                fullname: '',
                email: '',
                phone: ''
            }
        },

        methods: {

            volunteer() {
                this.showForm = true
            }

        }

    }
</script>

<style scoped>
    .volunteer{
        position: relative;
        display: grid;
        min-height: 100vh;
        align-content: center;
        padding: 68px;
        color: #777;
    }
    .volunteer h1, .volunteer p{
        margin-bottom: 20px;
    }
    .vol-btn{
        width: 160px;
    }
    .form{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate( -50%, -50%);
        background: #fefefe;
        border-radius: 5px;
        padding: 48px 24px;
        box-shadow: 0 8px 18px 0 rgba(0,0,0,0.4);
    }
    form{
        display: grid;
        grid-gap: 12px;
        grid-template: 35px  35px 38px / 180px 180px;
        color: #ccc;
    }
    .vol-cancel{
        background: #f6f6f6;
    }
    .vol-submit{
        background: #417cca;
    }

</style>