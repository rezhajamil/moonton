<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subscriptionPlan=[
            [
                'name'=>'Basic',
                'price'=>399000,
                'active_period_in_months'=>3,
                'features'=>json_encode(['feature1','feature2']),
            ],
            [
                'name'=>'For Greatest',
                'price'=>899000,
                'active_period_in_months'=>3,
                'features'=>json_encode(['feature1','feature2','feature3','feature4']),
            ],
        ];

        SubscriptionPlan::insert($subscriptionPlan);
    }
}
