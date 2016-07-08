var app;
(function (app) {
    var productdetail;
    (function (productdetail) {
        var ProductDetailCtrl = (function () {
            function ProductDetailCtrl($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.title = "Product Detail";
                var id = $routeParams.productId;
                var productResource = dataAccessService.getProductResource();
                productResource.get({ productId: id }, function (data) {
                    _this.product = data;
                });
            }
            ProductDetailCtrl.$inject = ["$routeParams", "dataAccessService"];
            return ProductDetailCtrl;
        }());
        angular
            .module("productManagement")
            .controller("ProductDetailCtrl", ProductDetailCtrl);
    })(productdetail = app.productdetail || (app.productdetail = {}));
})(app || (app = {}));
