<%@ page isELIgnored="false"%>
<%@ page import="org.springframework.security.web.csrf.CsrfToken"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="m-login m-login--signin  m-login--5"
	style="padding: 30px;">

	<div class="m-content">
		<!--Begin::Section-->
	
		<h4>Embedded Web Result Exmaple</h4>
	
		<div class="row" style="padding-top: 30px;">
	
			<div class="col-md-12">
				<div class="m-portlet" style="width: 100%;">
	
					<div class="m-portlet__body"
						style="text-align: center;"
						ng-show="t.TrxResult == 'APPROVED'">
	
						<img src="../assets/app/media/img/tx/check.png" style="width: 70%;">
						
						<br/>
						<br/>
						<span>
							Folio: {{t.TrxOrgNumber}}
						</span>
						<br/>
						<span>
							Aut: {{t.TrxAuth}}
						</span>
						<br/>
						<span>
							Fecha: {{t.TrxDate}} {{t.TrxTime}}
						</span>
						<br/>
						<span>
							{{t.TrxCard}}
						</span>
						<br/>
						<span>
							{{t.TrxCardBrand}}/{{t.TrxCardBank}}/{{t.TrxCardInstrument}}
						</span>
						<br/>
						<span>
							{{t.TrxPaymentMode}}
						</span>
	
					</div>
					
					<div class="m-portlet__body"
						style="text-align: center;"
						ng-show="t.TrxResult != 'APPROVED'">
	
						<img src="../assets/app/media/img/tx/cancel.png" style="width: 70%;">
						
						<br/>
						<br/>
						<span>
							{{t.TrxResult}}
						</span>
						<br/>
						<span>
							{{t.TrxResultCode}} - {{t.TrxDescription}} 
						</span>
	
					</div>
					
				</div>
			</div>
	
		</div>
	
	</div>	
</div>