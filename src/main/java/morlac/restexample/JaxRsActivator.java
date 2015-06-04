package de.morlac.restexample;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

/**
 * "no XML" approach to activate JAX-RS application.
 */
@ApplicationPath("/rest")
public class JaxRsActivator extends Application {
}
